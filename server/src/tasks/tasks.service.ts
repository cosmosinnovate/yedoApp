import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserService } from 'src/users/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
    private readonly userService: UserService,
  ) {}

  /**
   * Create new task
   * @param createTaskDto  CreateTaskDto
   * @returns created task
   */
  async create(createTaskDto: CreateTaskDto) {
    const task = await this.taskModel.create(createTaskDto);
    return await this.taskModel.findById(task._id).populate('user').lean();
  }

  /**
   * Get all tasks
   * @returns all tasks
   */
  async findAll(
    status: boolean,
    page: number,
    limit: number,
    category: string,
    userId: string,
  ) {
    Logger.log('status', status);
    Logger.log(category, 'category');
    const skip = (page - 1) * limit;
    try {
      if (
        category !== undefined &&
        category !== null &&
        category !== '' &&
        category !== 'all'
      ) {
        return await this.taskModel
          .find({ status, category: category?.toLowerCase() })
          .skip(skip)
          .limit(limit)
          .populate('user')
          .sort({ createdAt: -1 }); // This sorts the results by 'createdAt' field in descending order.
      } else {
        return await this.taskModel
          // .find({ status })
          .find({ user: userId })
          // .skip(skip)
          // .limit(limit)
          .populate('user')
          .sort({ createdAt: -1 }); // This sorts the results by 'createdAt' field in descending order.
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(error, 500);
    }
  }

  /**
   * find one task by id
   * @param id string
   * @returns task
   */
  async findOne(id: string) {
    return await this.taskModel.findById(id).lean();
  }

  /**
   * Update task fields
   * @param _id string
   * @param updateTaskDto object UpdateTaskDto
   * @returns return updated task
   */
  async update(_id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskModel
      .findByIdAndUpdate({ _id }, { ...updateTaskDto }, { new: true })
      .populate('user')
      .lean();
  }

  /**
   * Remove task
   * @param id string
   * @returns return deleted task
   */
  async remove(id: string) {
    return await this.taskModel.findByIdAndRemove(id).lean();
  }
}
