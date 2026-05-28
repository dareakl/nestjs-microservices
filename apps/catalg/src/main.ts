import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { CatalgModule } from './catalg.module';

async function bootstrap() {
  process.title = 'catalog';
  const logger = new Logger('CatalogBootstrap');
  //const port = Number(process.env.CATALOG_TCP_PORT ?? 4011);

  const rmqurl = process.env.RABBITMQ_URL ?? 'amqp://localhost:5672';

  const queue = process.env.CATALOG_QUEUE ?? 'catalog_queue';

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CatalgModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [rmqurl],
        queue,
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  app.enableShutdownHooks();
  await app.listen();

  logger.log(`catalog RMQ listening on queue ${queue} via ${rmqurl}`);
}

bootstrap();
