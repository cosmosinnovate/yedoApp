import { ApiProperty } from '@nestjs/swagger';

export class CreateUserAuth {
  @ApiProperty({
    type: String,
    description: 'User email',
    required: true,
    example: 'exmaple@example.com',
    maximum: 25,
  })
  email: string;
  @ApiProperty({
    type: String,
    description: 'Password',
    required: true,
    maximum: 100,
  })
  password: string;
  @ApiProperty({
    type: String,
    description: 'First name',
    required: true,
    example: 'john',
    maximum: 25,
  })
  firstName: string;
  @ApiProperty({
    type: String,
    description: 'Last name',
    required: true,
    example: 'Doe',
    maximum: 25,
  })
  lastName: string;
  @ApiProperty({
    type: String,
    description: 'Group or family name',
    required: false,
    example: 'kingsFam',
    maximum: 25,
  })
  name: string;
}
