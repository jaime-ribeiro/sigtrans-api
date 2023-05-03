import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateVeiculoDTO {
  @ApiProperty({
    description:
      'Pode ou não inserir a Placa que vai ser alterada no padrão Mercosul',
    example: 'DTC2L47',
  })
  @IsOptional()
  @IsString()
  placa?: string;

  @ApiProperty({
    description:
      'Pode ou não inserir o Chassi que vai ser alterada no padrão Brasileiro',
    example: '4LK8TMKBMWNH73716',
  })
  @IsOptional()
  @IsString()
  chassi?: string;

  @ApiProperty({
    description: 'Pode ou não inserir a Marca que vai ser alterada',
    example: 'Volkswagen',
  })
  @IsOptional()
  @IsString()
  marca?: string;

  @ApiProperty({
    description: 'Pode ou não inserir o Modelo que vai ser alterado',
    example: 'Corolla',
  })
  @IsOptional()
  @IsString()
  modelo?: string;

  @ApiProperty({
    description:
      'Pode ou não inserir a UF(Unidade Federativa) que vai ser alterada',
    example: 'MG',
  })
  @IsOptional()
  @IsString()
  uf?: string;

  @ApiProperty({
    description: 'Pode ou não inserir a Categoria que vai ser alterada',
    example: 'Passeio',
  })
  @IsOptional()
  @IsString()
  categoria?: string;

  @ApiProperty({
    description: 'Pode ou não inserir o Tipo que vai ser alterado',
    example: 'Novo',
  })
  @IsOptional()
  @IsString()
  tipo?: string;

  @ApiProperty({
    description: 'Pode ou não inserir a Especie que vai ser alterada',
    example: 'Automóvel',
  })
  @IsOptional()
  @IsString()
  especie?: string;

  @ApiProperty({
    description: 'Pode ou não inserir o Ano que vai ser alterado',
    example: '2007',
  })
  @IsOptional()
  @IsInt({ message: 'O ano tem que ser do tipo Int(Inteiro)' })
  ano?: number;
}
