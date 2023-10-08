import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, maxlength: 50 },
  password: { type: String, required: true, maxlength: 100 },
  firstName: { type: String, required: true, maxlength: 50 },
  lastName: { type: String, required: true, maxlength: 50 },
  phoneNo: { type: String, required: false, maxlength: 11 },
  isAdmin: { type: String, default: false },
  verified: { type: Boolean, default: false },
  groupId: { type: String },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date },
});

export class UserEntity {
  @ApiProperty({ type: String })
  id?: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @ApiProperty()
  phoneNo?: string;

  @ApiProperty({ default: false })
  isAdmin: boolean;
  @ApiProperty()
  verified?: boolean;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
  @ApiProperty({ type: Number, nullable: true })
  groupId?: string;
}
