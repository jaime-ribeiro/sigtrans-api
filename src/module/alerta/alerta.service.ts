import { Injectable } from '@nestjs/common';
import { AlertaDTO } from './alerta.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AlertaService {
  constructor(private prisma: PrismaService) {}

  async createAlerta(data: AlertaDTO) {
    const alertaExists = await this.prisma.alerta.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (alertaExists) {
      throw new Error('Alerta já existe');
    }

    const alerta = await this.prisma.alerta.create({
      data,
    });

    return alerta;
  }

  async findAll() {
    const alertas = await this.prisma.alerta.findMany();

    return alertas;
  }

  async update(id: string, data: AlertaDTO) {
    const alerta = await this.prisma.alerta.update({
      where: {
        id,
      },
      data,
    });

    return alerta;
  }

  async delete(id: string) {
    const alerta = await this.prisma.alerta.delete({
      where: {
        id,
      },
    });

    return alerta;
  }
}
