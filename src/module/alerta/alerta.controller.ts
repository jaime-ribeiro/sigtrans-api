import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { criarAlertaDTO } from './dto/criarAlerta.dto';

@Controller('alerta')
export class AlertaController {
  constructor(private readonly alertaService: AlertaService) {}

  @Post()
  async create(@Body() data: criarAlertaDTO) {
    return this.alertaService.createAlerta(data);
  }

  @Get()
  async findAll() {
    return this.alertaService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: criarAlertaDTO) {
    return this.alertaService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.alertaService.delete(id);
  }
}
