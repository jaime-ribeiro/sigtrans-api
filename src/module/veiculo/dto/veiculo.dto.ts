import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class VeiculoDTO {
  @IsNotEmpty({ message: 'A placa não pode ser vazio' })
  placa: string;

  @IsNotEmpty({ message: 'O chassi não pode ser vazio' })
  chassi: string;

  @IsNotEmpty({ message: 'A marca não pode ser vazio' })
  marca: string;

  @IsNotEmpty({ message: 'O modelo não pode ser vazio' })
  modelo: string;

  @IsNotEmpty({ message: 'O uf não pode ser vazio' })
  uf: string;

  @IsNotEmpty({ message: 'A categoria não pode ser vazio' })
  categoria: string;

  @IsNotEmpty({ message: 'O tipo não pode ser vazio' })
  tipo: string;

  @IsNotEmpty({ message: 'A especie não pode ser vazio' })
  especie: string;

  @IsInt({ message: 'O ano tem que ser do tipo Int(Inteiro)' })
  @IsNotEmpty({ message: 'O ano não pode ser vazio' })
  ano: number;

  createdAt: Date;

  updatedAt: Date;
}
