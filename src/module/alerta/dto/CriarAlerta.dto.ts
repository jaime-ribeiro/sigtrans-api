import { IsNotEmpty, MaxLength } from 'class-validator';
import { AlertaTipo } from '../enums/AlertaTipo.enum';
import { AlertaSituacao } from '../enums/AlertaSituacao.enum';
import { AlertaStatus } from '../enums/AlertaStatus.enum';

export class CriarAlertaDTO {
  id?: string;

  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @MaxLength(30, {
    message: 'O nome não pode conter mais 30 Caracteres',
  })
  nome: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazio' })
  descricao: string;

  @IsNotEmpty({ message: 'O tipo não pode ser vazio' })
  tipo: AlertaTipo;

  @IsNotEmpty({ message: 'A situação não pode estar vazio' })
  situacao: AlertaSituacao;

  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: AlertaStatus;
}
