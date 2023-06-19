import { PartialType } from '@nestjs/swagger';
import { Task } from '../entities/task.entity';

export class CreateTaskDto extends PartialType(Task) {}
