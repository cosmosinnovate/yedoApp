import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({
    type: String,
    description: 'User email',
    required: true,
    example: 'exmaple@example.com',
    maximum: 25,
  })
  email: string;
}
