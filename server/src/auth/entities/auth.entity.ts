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
  @ApiProperty({ type: String })
  otp: number;
}
