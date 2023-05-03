import { Module } from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { AlertaController } from './alerta.controller';
import { PrismaService } from '../../database/prisma.service';
import { AlertGateway } from '../../gateway/AlertGateway';

@Module({
  controllers: [AlertaController],
  providers: [AlertaService, PrismaService, AlertGateway],
})
export class AlertaModule {}
