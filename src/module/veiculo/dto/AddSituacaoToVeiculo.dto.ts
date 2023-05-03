import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddSituacaoToCreateVeiculoDTO {
  @ApiProperty({
    description:
      'Deve ser inserido um ID do Veiculo, ou seja, crie o veículo primeiro e depois busque o ID dele, considerando que o ID é um UUID',
    example: '00b68d0e-307b-46a7-a272-ed532577515b',
  })
  @IsNotEmpty({ message: 'O veiculoId não pode ser vazio' })
  veiculoId: string;

  @ApiProperty({
    description:
      'Deve ser inserido um ID do Alerta, ou seja, crie o alerta primeiro e depois busque o ID dele, considerando que o ID é um UUID',
    example: '0900c070-e583-4108-b865-58407eafe806',
  })
  @IsNotEmpty({ message: 'O alertaId não pode ser vazio' })
  alertaId: string;
}
