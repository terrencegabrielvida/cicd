import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCICD(): string {
    return 'This is Terrence CICD Practice version 3!';
  }
}
