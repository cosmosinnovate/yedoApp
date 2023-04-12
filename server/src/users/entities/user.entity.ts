import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  firstName?: string;
  @ApiProperty()
  lastName?: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phoneNo?: string;
  @ApiProperty({ default: 0 })
  otp: number;
  @ApiProperty({ default: false })
  isAdmin: boolean;
  @ApiProperty()
  verified: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
