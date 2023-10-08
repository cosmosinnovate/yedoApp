import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone?: string;
  @ApiProperty()
  jwt?: string;
}

export interface DecodedUser {
  id: string;
  email: string;
  verified: boolean;
}
