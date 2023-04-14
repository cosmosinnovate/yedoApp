import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception.status === 409) {
      response.status(409).json({
        statusCode: 409,
        message: exception.message,
        error: 'Conflict',
      });
    } else {
      response.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
        error: 'Server Error',
      });
    }
  }
}
