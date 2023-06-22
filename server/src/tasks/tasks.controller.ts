import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Query,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskAsCompletedDto, UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
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
        startDate: createTaskDto?.startDate,
        endDate: createTaskDto?.endDate,
        startTime: createTaskDto?.startTime,
        status: false, // The status of the task. Can be 'true' or 'false'.
        endTime: createTaskDto?.endTime,
        user: user.id, // Replace 'user_id' with the actual user ID // The person who created this.
        group: createTaskDto?.group, // Replace 'group_id' with the actual group ID // The group this task belongs to.
      }),
    });
  }

  @Get()
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Get all tasks',
  })
  @Get()
  @ApiQuery({ name: 'status', type: 'boolean', required: false })
  @ApiQuery({ name: 'page', type: 'number', required: false })
  @ApiQuery({ name: 'limit', type: 'number', required: false })
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Get all tasks',
  })
  async findAll(
    @Query('status') status: boolean,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('category') category: string,
  ) {
    const tasks: Task[] = await this.tasksService.findAll(
      status,
      page,
      limit,
      category,
    );
    Logger.log(tasks);
    return SuccessResponse({
      statusCode: 200,
      message: 'Tasks fetched successfully',
      data: tasks,
    });
  }

  @Get(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Get single task',
  })
  async findOne(@Param('id') id: string) {
    return SuccessResponse({
      statusCode: 200,
      message: 'Tasks fetched successfully',
      data: await this.tasksService.findOne(id),
    });
  }

  @Patch(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Update single task',
  })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return SuccessResponse({
      statusCode: 201,
      message: 'Tasks fetched successfully',
      data: await this.tasksService.update(id, updateTaskDto),
    });
  }

  @Put(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Update task as completed',
  })
  async markTaskAsCompleted(
    @Param('id') id: string,
    @Body() updateTaskDto: any,
  ) {
    console.log(updateTaskDto);
    return SuccessResponse({
      statusCode: 201,
      message: 'Update task as completed',
      data: this.tasksService.update(id, updateTaskDto),
    });
  }

  @Delete(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Delete single tasks',
  })
  async remove(@Param('id') id: string) {
    return SuccessResponse({
      statusCode: 201,
      message: 'Tasks fetched successfully',
      data: await this.tasksService.remove(id),
    });
  }
}
