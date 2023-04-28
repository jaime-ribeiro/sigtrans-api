import { IsNotEmpty, MaxLength } from 'class-validator';

export class criarAlertaDTO {
  id?: string;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @MaxLength(30, {
    message: 'O nome não pode conter mais 30 Caracteres',
  })
  nome: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazio' })
  descricao: string;

  @IsNotEmpty({ message: 'O tipo não pode ser vazio' })
  tipo: string;

  @IsNotEmpty({ message: 'A situação não pode estar vazio' })
  situacao: string;

  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: string;
}
