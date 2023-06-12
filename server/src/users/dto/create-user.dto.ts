import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ maxLength: 50 })
  email: string;
  @ApiProperty({ maxLength: 50 })
  firstName: string;
  @ApiProperty({ maxLength: 50 })
  lastName: string;
}
