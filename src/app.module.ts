import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleModule } from './module/module.module';
import { VeiculoModule } from './module/veiculo/veiculo.module';
import { VeiculoModule } from './module/veiculo/veiculo.module';

@Module({
  imports: [ModuleModule, VeiculoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
