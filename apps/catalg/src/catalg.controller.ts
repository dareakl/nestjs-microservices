import { Controller, Get } from '@nestjs/common';
import { CatalgService } from './catalg.service';

@Controller()
export class CatalgController {
  constructor(private readonly catalgService: CatalgService) {}

  @Get()
  getHello(): string {
    return this.catalgService.getHello();
  }
}
