import { Module } from '@nestjs/common';
import { VeiculoModule } from './module/veiculo/veiculo.module';
import { AlertaModule } from './module/alerta/alerta.module';

@Module({
  imports: [VeiculoModule, AlertaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
