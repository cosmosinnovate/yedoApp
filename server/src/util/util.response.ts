import { ApiProperty } from '@nestjs/swagger';

export class SuccessfulResponse {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty({
    type: Object,
    title: 'user | jwt | users | tasks[] | task |group | groups[]',
  })
  data: any;
}

export class ResponseEntity {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: any;
}

export function SuccessResponse(res: SuccessfulResponse): SuccessfulResponse {
  return {
    statusCode: res.statusCode,
    message: res.message,
    data: res.data,
  };
}
