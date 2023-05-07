import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  status?: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty({ required: false, nullable: true })
  groupId: number;
  @ApiProperty({ required: false, nullable: true })
  userId: number;
}
