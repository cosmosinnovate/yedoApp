import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';
import { IsEmail } from 'class-validator';

export class CreateUserDto extends UserEntity {
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  otp: number;
}
