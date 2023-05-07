import { ApiProperty } from '@nestjs/swagger';
import { Group, Task } from '@prisma/client';
import { IsEmail } from 'class-validator';

export class User {
  @ApiProperty({ type: Number })
  id: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  phoneNo?: string;
  @ApiProperty({ default: 0, type: Number })
  otp: number;
  @ApiProperty({ default: false })
  isAdmin: boolean;
  @ApiProperty()
  verified: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  groupId?: number;
}
