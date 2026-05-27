import { Module } from '@nestjs/common';
import { CatalgController } from './catalg.controller';
import { CatalgService } from './catalg.service';

@Module({
  imports: [],
  controllers: [CatalgController],
  providers: [CatalgService],
})
export class CatalgModule {}
