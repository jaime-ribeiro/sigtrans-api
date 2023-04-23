import { Module } from '@nestjs/common';
import { VeiculoModule } from './module/veiculo/veiculo.module';

@Module({
  imports: [VeiculoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
