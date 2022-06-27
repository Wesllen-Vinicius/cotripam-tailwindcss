import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from 'src/PrismaCliente/prisma.service';
import { CreateFuncao, UpdateFuncao } from './dto';

@Injectable()
export class FuncaoService {
  constructor(private dataService: DataService) {}

  async createFuncao(funcoes: CreateFuncao) {
    const funcaoCreate = await this.dataService.funcoes.create({
      data: {
        ...funcoes,
      },
    });
    return funcaoCreate;
  }

  async getFuncaoById(funcaoId: number) {
    const funcao = await this.dataService.funcoes.findUnique({
      where: {
        id: funcaoId,
      },
    });
    if (!funcao) {
      throw new NotFoundException('Função not found!');
    }
    return funcao;
  }

  async getFuncoes() {
    return this.dataService.funcoes.findMany();
  }

  async updateFuncao(funcaoId: number, funcoes: UpdateFuncao) {
    const funcaoExist = await this.dataService.funcoes.findUnique({
      where: {
        id: funcaoId,
      },
    });
    if (!funcaoExist) {
      throw new NotFoundException('Função not found!');
    }
    return this.dataService.funcoes.update({
      where: {
        id: funcaoId,
      },
      data: {
        ...funcoes,
      },
    });
  }

  async deletFuncao(funcaoId: number) {
    const funcaoExist = await this.dataService.funcoes.findUnique({
      where: {
        id: funcaoId,
      },
    });
    if (!funcaoExist) {
      throw new NotFoundException('Função not found!');
    }
    return this.dataService.funcoes.delete({
      where: {
        id: funcaoId,
      },
    });
  }
}
