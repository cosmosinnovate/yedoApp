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
import { TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from 'src/decorator/user.decorator';
import { Category, Task } from './entities/task.entity';
import mongoose from 'mongoose';
import { SuccessResponse, SuccessfulResponse } from 'src/util/util.response';

@Controller('api/tasks')
@ApiTags('api/tasks')
@ApiBearerAuth()
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'The record has been successfully created.',
  })
  async create(@Body() createTaskDto: CreateTaskDto, @CurrentUser() user: any) {
    if (!mongoose.Types.ObjectId.isValid(user.id)) {
      return SuccessResponse({
        statusCode: 400,
        message: 'User created successfully',
        data: null,
      });
    }

    const task = await this.TaskService.create({
      title: createTaskDto.title,
      description: createTaskDto.description,
      category: createTaskDto.category
        ? createTaskDto.category
        : Category.personal, // The type of task. Can be 'family', 'work', or 'personal'.
      startDate: createTaskDto?.startDate,
      endDate: createTaskDto?.endDate,
      startTime: createTaskDto?.startTime,
      status: false, // The status of the task. Can be 'true' or 'false'.
      endTime: createTaskDto?.endTime,
      user: user.id, // Replace 'user_id' with the actual user ID // The person who created this.
      group: createTaskDto?.group, // Replace 'group_id' with the actual group ID // The group this task belongs to.
    });

    return SuccessResponse({
      statusCode: 201,
      message: 'User created successfully',
      data: task,
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
    @CurrentUser() user: any,
  ) {
    const tasks: Task[] = await this.TaskService.findAll(
      status,
      page,
      limit,
      category,
      user.id,
    );
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
    const task = await this.TaskService.findOne(id);
    return SuccessResponse({
      statusCode: 200,
      message: 'Tasks fetched successfully',
      data: task,
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
      data: await this.TaskService.update(id, updateTaskDto),
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
    const task = await this.TaskService.update(id, updateTaskDto);
    console.log('UPDATED STATUS: ', task);
    return SuccessResponse({
      statusCode: 201,
      message: 'Update task as completed',
      data: task,
    });
  }

  @Delete(':id')
  @ApiCreatedResponse({
    type: SuccessfulResponse,
    description: 'Delete single tasks',
  })
  async remove(@Param('id') id: string) {
    const task = await this.TaskService.remove(id);
    Logger.log(task, 'task');
    return SuccessResponse({
      statusCode: 201,
      message: 'Tasks fetched successfully',
      data: task,
    });
  }
}
