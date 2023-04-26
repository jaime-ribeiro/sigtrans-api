import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { VeiculoModule } from './module/veiculo/veiculo.module';
import { AlertaModule } from './module/alerta/alerta.module';
import { ValidarVeiculoMiddleware } from './middleware/validarVeiculo.middleware';

@Module({
  imports: [VeiculoModule, AlertaModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidarVeiculoMiddleware)
      .forRoutes({ path: 'veiculo', method: RequestMethod.POST });
  }
}
