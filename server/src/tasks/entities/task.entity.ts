import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export enum Category {
  Family = 'Family',
  Work = 'Work',
  Personal = 'Personal',
}

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 100 },
  description: { type: String, required: false, maxlength: 2000 },
  category: {
    type: String,
    required: false,
    enum: ['Family', 'Work', 'Personal'],
  },
  tags: { type: Array, required: false },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  startTime: { type: String, required: false },
  endTime: { type: String, required: false },
  status: { type: Boolean, default: false },
  user: { type: String, ref: 'User' },
  group: {
    type: String,
    ref: 'Group',
    required: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export class Task {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description?: string;
  @ApiProperty({ enum: Category })
  category: Category;
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
  @ApiProperty({ type: String, required: false })
  user: string;
  @ApiProperty({ type: String, required: false })
  group?: string;

  constructor(partial: Task) {
    Object.assign(this, partial);
  }
}
