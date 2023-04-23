import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoDTO } from './veiculo.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  async create(@Body() data: VeiculoDTO) {
    return this.veiculoService.create(data);
  }

  @Get()
  async findAll() {
    return this.veiculoService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VeiculoDTO) {
    return this.veiculoService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.veiculoService.delete(id);
  }
}
