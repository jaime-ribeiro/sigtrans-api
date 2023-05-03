import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //Adicionando Swagger
  const config = new DocumentBuilder()
    .setTitle('Sigtrans Desafio')
    .setDescription('Sigtrans API para Veículos e Alertas')
    .setVersion('1.0')
    .addTag('Veiculo')
    .addTag('Alerta')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
