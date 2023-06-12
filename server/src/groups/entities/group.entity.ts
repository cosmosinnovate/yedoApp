import { ApiProperty } from '@nestjs/swagger';
import { Task } from 'src/tasks/entities/task.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const GroupsSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 25 },
  description: { type: String, required: true, minlength: 3, maxlength: 100 },
  members: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tasks: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export class Group {
  @ApiProperty({ type: Number })
  id: number;
  @ApiProperty({ type: String, minLength: 3, maxLength: 25 })
  name: string;
  @ApiProperty({ type: String, minLength: 3, maxLength: 100 })
  description: string;
  // @ApiProperty({ type: () => [UserEntity] })
  // members: UserEntity[];
  // @ApiProperty({ type: () => [Task] })
  // tasks: Task[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty({ type: UserEntity })
  user?: UserEntity;
}
