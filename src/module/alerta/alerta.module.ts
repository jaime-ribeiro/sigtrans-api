import { Module } from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { AlertaController } from './alerta.controller';

@Module({
  controllers: [AlertaController],
  providers: [AlertaService],
})
export class AlertaModule {}
