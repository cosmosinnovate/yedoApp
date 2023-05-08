import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone?: string;
  @ApiProperty()
  otp?: number;
  @ApiProperty()
  jwt?: string;
}

export class Otp {
  @ApiProperty({ type: String, maxLength: 6, minLength: 6 })
  otp: number;
}

export interface DecodedUser {
  id: number;
  email: string;
  verified: boolean;
}
