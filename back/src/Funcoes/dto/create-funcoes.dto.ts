import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFuncao {
  @IsString()
  @IsNotEmpty()
  nome_funcao: string;
}
