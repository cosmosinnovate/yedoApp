import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

export class UpdateTaskAsCompletedDto {
  status: boolean;
}
