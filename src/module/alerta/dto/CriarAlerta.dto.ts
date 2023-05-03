import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';
import { AlertaTipo } from '../enums/AlertaTipo.enum';
import { AlertaSituacao } from '../enums/AlertaSituacao.enum';
import { AlertaStatus } from '../enums/AlertaStatus.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CriarAlertaDTO {
  @ApiProperty({
    description: 'O nome do alerta que é usado para a sua identificação',
    example: 'Livre de tráfego pela ponte',
    maxLength: 30,
  })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @MaxLength(30, {
    message: 'O nome não pode conter mais 30 Caracteres',
  })
  nome: string;

  @ApiProperty({
    description: 'Descrever o alerta normalmente complementando o nome  ',
    example: 'Veículos de passeio passam livremente',
  })
  @IsNotEmpty({ message: 'A descrição não pode ser vazio' })
  descricao: string;

  @ApiProperty({
    description: 'O tipo de alerta deve ser "white" ou "black"',
    example: 'White',
  })
  @IsEnum(AlertaTipo, { message: 'O tipo deve ser "white" ou "black"' })
  @IsNotEmpty({ message: 'O tipo não pode ser vazio' })
  tipo: AlertaTipo;

  @ApiProperty({
    description:
      'A situação deve ser "liberação","permissão","bloqueio", "impedimento"',
    example: 'liberação',
  })
  @IsEnum(AlertaSituacao, {
    message:
      'A situação deve ser "liberação","permissão","bloqueio", "impedimento"',
  })
  @IsNotEmpty({ message: 'A situação não pode estar vazio' })
  situacao: AlertaSituacao;

  @ApiProperty({
    description:
      'O status deve ser "ativo" ou "inativo" dependendo se ele deve estar em funcionamento ou não',
    example: 'ativo',
  })
  @IsEnum(AlertaStatus, { message: 'O status deve ser "ativo" ou "inativo"' })
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: AlertaStatus;
}
