import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/decorator/user.decorator';
import { Task } from './entities/task.entity';
import mongoose from 'mongoose';
import { SuccessResponse, SuccessfulResponse } from 'src/util/util.response';

@Controller('api/tasks')
@ApiTags('api/tasks')
@ApiBearerAuth()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'The record has been successfully created.',
  })
  async create(@Body() createTaskDto: CreateTaskDto, @CurrentUser() user: any) {
    if (!mongoose.Types.ObjectId.isValid(user.id)) {
      // Respond with an error
      return SuccessResponse({
        statusCode: 400,
        message: 'User created successfully',
        data: user.id,
      });
    }

    return SuccessResponse({
      statusCode: 201,
      message: 'User created successfully',
      data: await this.tasksService.create({
        title: createTaskDto.title,
        description: createTaskDto.description,
        category: createTaskDto.category, // The type of task. Can be 'family', 'work', or 'personal'.
        startDate: createTaskDto.startDate
          ? createTaskDto.startDate
          : new Date(),
        endDate: createTaskDto.endDate ? createTaskDto.endDate : new Date(),
        startTime: createTaskDto.startTime
          ? createTaskDto.startTime
          : '10:00 AM',
        endTime: createTaskDto.endTime ? createTaskDto.endTime : '12:00 PM',
        user: user.id, // Replace 'user_id' with the actual user ID // The person who created this.
        group: createTaskDto.group, // Replace 'group_id' with the actual group ID // The group this task belongs to.
      }),
    });
  }

  @Get()
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Get all tasks',
  })
  async findAll() {
    Logger.log('findAll');
    return SuccessResponse({
      statusCode: 400,
      message: 'User created successfully',
      data: await this.tasksService.findAll(),
    });
  }

  @Get(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Get all single task',
  })
  async findOne(@Param('id') id: string) {
    return await this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Update single task',
  })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Delete single tasks',
  })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
