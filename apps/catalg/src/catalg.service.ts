import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalgService {
  getHello(): string {
    return 'Hello World!';
  }
}
