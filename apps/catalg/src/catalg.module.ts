import { Module } from '@nestjs/common';
import { CatalgController } from './catalg.controller';
import { CatalgService } from './catalg.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './products/product.schema';
import { ProductController } from './products/product.controller';
import { ProductService } from './products/products.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI_CATALOG as string),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [CatalgController, ProductController],
  providers: [CatalgService, ProductService],
})
export class CatalgModule {}
