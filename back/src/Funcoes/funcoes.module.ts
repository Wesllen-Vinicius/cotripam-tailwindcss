import { Module } from '@nestjs/common';
import { FuncaoControler } from './funcoes.controller';
import { FuncaoService } from './funcoes.service';

@Module({
  providers: [FuncaoService],
  controllers: [FuncaoControler],
})
export class FuncaoModule {}
