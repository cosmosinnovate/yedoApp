import { Injectable } from '@nestjs/common';
import { timer } from 'rxjs';

@Injectable()
export class AppService {
  itWorks(): string {
    const source = timer(1000, 1000);
    return `Service is live {${source}}`;
  }
}
