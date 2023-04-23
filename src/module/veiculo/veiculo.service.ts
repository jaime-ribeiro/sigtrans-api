import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { VeiculoDTO } from './veiculo.dto';

@Injectable()
export class VeiculoService {
  constructor(private prisma: PrismaService) {}

  async create(data: VeiculoDTO) {
    await this.prisma.veiculo.create({
      data,
    });
  }

  async findAll() {
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
