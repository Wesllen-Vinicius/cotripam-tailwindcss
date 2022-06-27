import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateFuncao, UpdateFuncao } from './dto';
import { FuncaoService } from './funcoes.service';
@Controller('funcoes')
export class FuncaoControler {
  constructor(private funcaoService: FuncaoService) {}

  @Post()
  createFuncao(@Body() dto: CreateFuncao) {
    return this.funcaoService.createFuncao(dto);
  }

  @Get(':funcaoId')
  GetFuncaoById(@Param('userId', ParseIntPipe) funcaoId: number) {
    return this.funcaoService.getFuncaoById(funcaoId);
  }
  @Get()
  GetFuncoes() {
    return this.funcaoService.getFuncoes();
  }

  @Put(':funcaoId')
  updateFuncao(
    @Param('funcaoId', ParseIntPipe) funcaoId: number,
    @Body() funcaoData: UpdateFuncao,
  ) {
    return this.funcaoService.updateFuncao(funcaoId, funcaoData);
  }

  @Delete(':funcaoId')
  deleteFuncao(@Param('funcaoId', ParseIntPipe) funcaoId: number) {
    return this.funcaoService.deletFuncao(funcaoId);
  }
}
