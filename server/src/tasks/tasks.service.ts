import { Injectable } from '@nestjs/common';
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

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskModel.create(createTaskDto);
  }

  async findAll() {
    const task = await this.taskModel.find().populate('user');
    return task;
  }

  async findOne(id: string) {
    return await this.taskModel.findById(id);
  }

  async update(_id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskModel.findByIdAndUpdate(
      { _id },
      { ...updateTaskDto },
      { new: true },
    );
  }

  async remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
