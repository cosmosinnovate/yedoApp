export class SuccessfulResponse {
  statusCode: number;
  message: string;
  data: any;
}

export function SuccessResponse(res: SuccessfulResponse): SuccessfulResponse {
  return {
    statusCode: res.statusCode,
    message: res.message,
    data: res.data,
  };
}
