import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import * as mongoose from 'mongoose';

enum Category {
  family = 'family',
  work = 'work',
  personal = 'personal',
}

export const TasksSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 25 },
  description: { type: String, required: true, minlength: 3, maxlength: 400 },
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
    enum: ['family', 'work', 'personal'],
  },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  startTime: { type: String, required: false },
  endTime: { type: String, required: false },
  status: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export class Task {
  @ApiProperty({ type: mongoose.Schema.Types.ObjectId })
  _id?: string;
  @ApiProperty()
  title: string;
  @ApiProperty({ nullable: true })
  description?: string;
  @ApiProperty({ nullable: false, enum: Category })
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
  @ApiProperty({ type: mongoose.Schema.Types.ObjectId })
  user?: mongoose.Schema.Types.ObjectId;
  @ApiProperty({ type: mongoose.Schema.Types.ObjectId })
  group?: string;

  constructor(partial: Partial<Task>) {
    Object.assign(this, partial);
  }
}
