import { Controller, Get } from '@nestjs/common';
import { CatalgService } from './catalg.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CatalgController {
  constructor(private readonly catalgService: CatalgService) {}

  @MessagePattern('service.ping')
  ping() {
    return this.catalgService.ping();
  }
}
