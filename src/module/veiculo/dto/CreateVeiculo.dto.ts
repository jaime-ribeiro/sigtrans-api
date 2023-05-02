import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateVeiculoDTO {
  @IsNotEmpty({ message: 'A placa não pode ser vazio' })
  @IsString()
  placa: string;

  @IsNotEmpty({ message: 'O chassi não pode ser vazio' })
  @IsString()
  chassi: string;

  @IsNotEmpty({ message: 'A marca não pode ser vazio' })
  @IsString()
  marca: string;

  @IsNotEmpty({ message: 'O modelo não pode ser vazio' })
  @IsString()
  modelo: string;

  @IsNotEmpty({ message: 'O uf não pode ser vazio' })
  @IsString()
  uf: string;

  @IsNotEmpty({ message: 'A categoria não pode ser vazio' })
  @IsString()
  categoria: string;

  @IsNotEmpty({ message: 'O tipo não pode ser vazio' })
  @IsString()
  tipo: string;

  @IsNotEmpty({ message: 'A especie não pode ser vazio' })
  @IsString()
  especie: string;

  @IsInt({ message: 'O ano tem que ser do tipo Int(Inteiro)' })
  @IsNotEmpty({ message: 'O ano não pode ser vazio' })
  ano: number;
}
