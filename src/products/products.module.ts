import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
  imports: [CategoriesModule],
})
export class ProductsModule {}
