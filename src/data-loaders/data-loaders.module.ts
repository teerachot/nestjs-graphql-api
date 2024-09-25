import { Module } from '@nestjs/common';
import { DataLoadersService } from './data-loaders.service';
import { CategoriesModule } from '../categories/categories.module';
@Module({
  imports: [CategoriesModule],
  exports: [DataLoadersService],
  providers: [DataLoadersService],
})
export class DataLoadersModule {}
