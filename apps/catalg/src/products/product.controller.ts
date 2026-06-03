import { Controller } from '@nestjs/common';
import { ProductService } from './products.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GetProductByIdDto, CreateProductDto } from './product.dto';

@Controller()
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}
  @MessagePattern('product.create')
  create(@Payload() payload: CreateProductDto) {
    console.log('product.create received');
    console.log(payload);
    return this.ProductService.createNewProduct(payload);
  }
  @MessagePattern('product.list')
  list() {
    return this.ProductService.listProducts();
  }
  @MessagePattern('product.getById')
  getById(@Payload() payload: GetProductByIdDto) {
    return this.ProductService.getProductById(payload);
  }
}
