import { IsInt, IsString } from 'class-validator';

export class UpdateVeiculoDTO {
  @IsString()
  placa?: string;

  @IsString()
  chassi?: string;

  @IsString()
  marca?: string;

  @IsString()
  modelo?: string;

  @IsString()
  uf?: string;

  @IsString()
  categoria?: string;

  @IsString()
  tipo?: string;

  @IsString()
  especie?: string;

  @IsInt({ message: 'O ano tem que ser do tipo Int(Inteiro)' })
  ano: number;
}
