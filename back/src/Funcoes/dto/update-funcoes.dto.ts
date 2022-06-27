import { IsString } from 'class-validator';

export class UpdateFuncao {
  @IsString()
  nome_funcao: string;
}
