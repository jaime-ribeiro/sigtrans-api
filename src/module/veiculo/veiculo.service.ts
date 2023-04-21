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
}
