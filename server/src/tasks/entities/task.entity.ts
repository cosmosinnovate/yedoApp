import { ApiProperty } from '@nestjs/swagger';
import { Group } from 'src/groups/entities/group.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import * as mongoose from 'mongoose';

export const TasksSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 25 },
  description: { type: String, required: true, minlength: 3, maxlength: 100 },
  category: { type: String, required: true, minlength: 3, maxlength: 25 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  users: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export class Task {
  @ApiProperty({ type: String })
  _id?: string;
  @ApiProperty()
  title: string;
  @ApiProperty({ nullable: true })
  description?: string;
  @ApiProperty({ nullable: true })
  category?: string;
  @ApiProperty({ nullable: true })
  startDate?: Date;
  @ApiProperty({ nullable: true })
  endDate?: Date;
  @ApiProperty({ nullable: true })
  startTime?: string;
  @ApiProperty({ nullable: true })
  endTime?: string;
  @ApiProperty({ default: false, type: Boolean })
  status: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty({ type: UserEntity })
  user?: UserEntity;
  @ApiProperty({ type: Group })
  group?: Group;
  @ApiProperty({ type: () => [UserEntity] })
  users?: UserEntity[];
}
