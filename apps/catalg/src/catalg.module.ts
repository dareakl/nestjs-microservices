import { Module } from '@nestjs/common';
import { CatalgController } from './catalg.controller';
import { CatalgService } from './catalg.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [],
  controllers: [CatalgController],
  providers: [CatalgService],
})
export class CatalgModule {}
