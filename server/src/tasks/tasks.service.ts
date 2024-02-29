import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  /**
   * Create new task
   * @param createTaskDto  CreateTaskDto
   * @returns created task
   */
  async create(createTaskDto: CreateTaskDto) {
    try {
      const task = await this.taskModel.create(createTaskDto);
      return await this.taskModel.findById(task._id).populate('user').lean();
    } catch (error) {
      throw new HttpException(error, 500, {
        cause: new Error('Error creating task'),
      });
    }
  }

  async findTasksNearExpiry(): Promise<Task[]> {
    const currentDate = new Date();
    const nearExpiryDate = new Date(currentDate.getTime() + 2 * 60000); // Adds 2 minutes to the current time

    // The query checks for tasks where the endDate is less than (before) the `nearExpiryDate`
    // and the status is false (assuming this indicates the task is not completed).
    console.log(await this.taskModel.find({}));
    return this.taskModel
      .find({
        endDate: { $lt: nearExpiryDate },
        status: false,
      })
      .exec();
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

  /**
   * Delete all tasks
   * @returns return deleted tasks
   */
  async deleteMany(userId: string) {
    return await this.taskModel.deleteMany({ user: userId });
  }
}
