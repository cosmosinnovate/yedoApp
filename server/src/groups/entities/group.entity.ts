import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class Group {
  @ApiProperty({ type: Number })
  id: number;
  @ApiProperty({ type: String, minLength: 3, maxLength: 25 })
  name: string;
  @ApiProperty({ type: String, minLength: 3, maxLength: 100 })
  description: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  user?: User;
}
