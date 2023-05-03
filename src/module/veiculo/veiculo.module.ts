import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [VeiculoController],
  providers: [VeiculoService, PrismaService],
})
export class VeiculoModule {}
