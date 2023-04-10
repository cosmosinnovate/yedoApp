import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  otp: number;
  @ApiProperty({ required: false, default: false })
  isAdmin: boolean;
  @ApiProperty({ required: false })
  phoneNo?: string;
  @ApiProperty({ required: false })
  firstName?: string;
  @ApiProperty({ required: false })
  lastName?: string;
}
