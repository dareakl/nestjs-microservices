import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalgService {
  ping() {
    return {
      ok: true,
      service: 'catalog',
      now: new Date().toISOString(),
    };
  }
}
