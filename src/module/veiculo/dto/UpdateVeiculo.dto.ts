import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateVeiculoDTO {
  @IsOptional()
  @IsString()
  placa?: string;

  @IsOptional()
  @IsString()
  chassi?: string;

  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  modelo?: string;

  @IsOptional()
  @IsString()
  uf?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  especie?: string;

  @IsOptional()
  @IsInt({ message: 'O ano tem que ser do tipo Int(Inteiro)' })
  ano?: number;
}
