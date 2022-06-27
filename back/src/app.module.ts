import { Module } from '@nestjs/common';
import { FuncaoModule } from './Funcoes/funcoes.module';
import { DataModule } from './PrismaCliente/prisma.module';

@Module({
  imports: [FuncaoModule, DataModule],
})
export class AppModule {}
