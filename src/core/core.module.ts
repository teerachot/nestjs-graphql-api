import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { DataLoadersModule } from '../data-loaders/data-loaders.module';
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [DataLoadersModule],
})
export class CoreModule {}
