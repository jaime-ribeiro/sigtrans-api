import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateVeiculoDTO } from './dto/CreateVeiculo.dto';
import { AddSituacaoToCreateVeiculoDTO } from './dto/AddSituacaoToVeiculo.dto';
import { UpdateVeiculoDTO } from './dto/UpdateVeiculo.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class VeiculoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateVeiculoDTO): Promise<CreateVeiculoDTO> {
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

  async addSituacao(data: AddSituacaoToCreateVeiculoDTO) {
    const situacaoVeiculoExiste = await this.prisma.alertaVeiculo.findFirst({
      where: {
        alertaId: data.alertaId,
        veiculoId: data.veiculoId,
      },
    });

    if (situacaoVeiculoExiste) {
      throw new Error('Este veículo já está com este alerta/situação');
    }

    const situacao = await this.prisma.alertaVeiculo.create({
      data,
    });

    return situacao;
  }

  async findAll(): Promise<CreateVeiculoDTO[]> {
    return await this.prisma.veiculo.findMany();
  }

  async encontrarVeiculoPlaca(placa: string) {
    const veiculo = await this.prisma.veiculo.findUnique({
      where: { placa: placa },
      include: {
        alertas: {
          include: {
            alerta: true,
          },
        },
      },
    });

    return veiculo;
  }

  async update(id: string, data: UpdateVeiculoDTO) {
    const veiculoExiste = await this.prisma.veiculo.findUnique({
      where: {
        id,
      },
    });

    if (!veiculoExiste) {
      throw new Error('Veiculo não encontrado');
    }

    if (data.placa) {
      const placaExiste = await this.prisma.veiculo.findFirst({
        where: {
          placa: data.placa,
          NOT: {
            id: id,
          },
        },
      });
      if (placaExiste) {
        throw new Error(
          'A Placa que você deseja alterar, já está registrada em outro veículo',
        );
      }
    }

    if (data.chassi) {
      const chassiExiste = await this.prisma.veiculo.findFirst({
        where: {
          chassi: data.chassi,
          NOT: {
            id: id,
          },
        },
      });
      if (chassiExiste) {
        throw new Error(
          'O chassi que você deseja alterar, já está registrada em outro veículo',
        );
      }
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
