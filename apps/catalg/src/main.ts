import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CatalgModule } from './catalg.module';

async function bootstrap() {
  process.title = 'catalog';
  const logger = new Logger('CatalogBootstrap');
  const port = Number(process.env.CATALOG_TCP_PORT ?? 4011);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CatalgModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port,
      },
    },
  );

  app.enableShutdownHooks();
  await app.listen();

  logger.log(`catalog microservice (TCP) listening on port ${port}`);
}

bootstrap();