import { IsNotEmpty } from 'class-validator';

export class AddSituacaoToCreateVeiculoDTO {
  @IsNotEmpty({ message: 'O veiculoId não pode ser vazio' })
  veiculoId: string;

  @IsNotEmpty({ message: 'O alertaId não pode ser vazio' })
  alertaId: string;
}
