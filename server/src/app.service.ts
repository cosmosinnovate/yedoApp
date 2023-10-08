import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  itWorks(): string {
    return 'Service 1 works!';
  }
}
