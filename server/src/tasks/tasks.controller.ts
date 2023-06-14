import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/decorator/user.decorator';
import { Task } from './entities/task.entity';

@Controller('api/tasks')
@ApiTags('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @CurrentUser() user: any) {
    const newTask = new Task({
      title: createTaskDto.title,
      description: createTaskDto.description,
      category: createTaskDto.category, // The type of task. Can be 'family', 'work', or 'personal'.
      startDate: createTaskDto.startDate ? createTaskDto.startDate : new Date(),
      endDate: createTaskDto.endDate ? createTaskDto.endDate : new Date(),
      startTime: createTaskDto.startTime ? createTaskDto.startTime : '10:00 AM',
      endTime: createTaskDto.endTime ? createTaskDto.endTime : '12:00 PM',
      user: user.id, // Replace 'user_id' with the actual user ID // The person who created this.
      group: 'group_id', // Replace 'group_id' with the actual group ID // The group this task belongs to.
    });
    return this.tasksService.create(newTask);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
