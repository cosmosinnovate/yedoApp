import { Injectable } from '@nestjs/common';
import { env } from 'process';
import { timer } from 'rxjs';

@Injectable()
export class AppService {
  itWorks(): any {
    const source = timer(1000, 1000);
    return {
      message: 'It works!',
      time: source,
      environment: env.NODE_ENVIRONMENT,
      version: 2.0,
    };
  }
}
