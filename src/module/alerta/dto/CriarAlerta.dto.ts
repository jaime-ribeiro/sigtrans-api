import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';
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

  @IsEnum(AlertaTipo, { message: 'O tipo deve ser "white" ou "black"' })
  @IsNotEmpty({ message: 'O tipo não pode ser vazio' })
  tipo: AlertaTipo;

  @IsEnum(AlertaSituacao, {
    message:
      'A situação deve ser "liberação","permissão","bloqueio", "impedimento"',
  })
  @IsNotEmpty({ message: 'A situação não pode estar vazio' })
  situacao: AlertaSituacao;

  @IsEnum(AlertaStatus, { message: 'O status deve ser "ativo" ou "inativo"' })
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: AlertaStatus;
}
