import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { VeiculoDTO } from './veiculo.dto';
//import { validate } from 'vin-validator';

@Injectable()
export class VeiculoService {
  constructor(private prisma: PrismaService) {}

  validarChassi(chassi: string): boolean {
    chassi = chassi.replace(/\s|-/g, '');

    //Removendo letras "i", "o" e "q", verificando se tem 17 caracteres e se os últimos 4 são números
    const regexChassi = /^[a-hj-npr-zA-HJ-NPR-Z0-9]{13}[0-9]{4}$/;

    if (!regexChassi.test(chassi)) {
      return false;
    }

    return true;
  }

  async create(data: VeiculoDTO) {
    data.placa = data.placa.toUpperCase();
    data.chassi = data.chassi.toUpperCase();

    const placaExiste = await this.prisma.veiculo.findFirst({
      where: { placa: data.placa },
    });

    const chassiExiste = await this.prisma.veiculo.findFirst({
      where: { chassi: data.chassi },
    });

    if (placaExiste || chassiExiste) {
      throw new Error('Placa ou Chassi já cadastrado');
    }

    const veiculo = await this.prisma.veiculo.create({
      data,
    });

    return veiculo;
  }

  async findAll(): Promise<VeiculoDTO[]> {
    return await this.prisma.veiculo.findMany();
  }

  async update(id: string, data: VeiculoDTO) {
    const veiculoExiste = await this.prisma.veiculo.findUnique({
      where: {
        id,
      },
    });

    if (!veiculoExiste) {
      throw new Error('Veiculo não encontrado');
    }

    return await this.prisma.veiculo.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const veiculoExiste = await this.prisma.veiculo.findUnique({
      where: {
        id,
      },
    });
    if (!veiculoExiste) {
      throw new Error('Veiculo não encontrado');
    }
    return await this.prisma.veiculo.delete({
      where: {
        id,
      },
    });
  }
}
