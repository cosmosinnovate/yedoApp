import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { EmailBounceError } from 'src/mail/mail.error';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.message
      ? exception.message.replace(/\n/g, '')
      : 'Internal server error';
    const error = exception.name ? exception.name : 'Server Error';
    // Check for specific errors and handle them differently
    if (error === 'ConflictException') {
      response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: 'A user with that email already exists',
        error: 'Conflict',
      });
    } else if (error === 'BadRequestException') {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: message,
        error: 'Bad Request',
      });
    } else if (exception.status === 401) {
      response.status(401).json({
        statusCode: 401,
        message: exception.message,
        error: 'Not authorized',
      });
    } else {
      response.status(status).json({
        statusCode: status,
        message,
        error,
      });
    }
  }
}

@Catch(BadRequestException)
export class BadRequestExceptionFilter extends BaseExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    // Get the reference to the Express response object
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // Send the custom response
    response.status(exception.getStatus()).json(exception?.getResponse());
  }
}

@Catch(EmailBounceError)
export class EmailBounceExceptionFilter extends BaseExceptionFilter {
  catch(exception: EmailBounceError, host: ArgumentsHost) {
    // Handle the EmailBounceError here
    Logger.log('Captured EmailBounceError:', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // Call the base class implementation to maintain default behavior
    super.catch(exception, host);
    response.status(400).json(exception.name);
  }
}
