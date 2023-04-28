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
import { VeiculoDTO } from './dto/veiculo.dto';
import { AddSituacaoToVeiculoDTO } from './dto/addSituacaoToVeiculo.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  async create(@Body() data: VeiculoDTO) {
    return this.veiculoService.create(data);
  }

  @Post('situacao')
  async addSituacao(@Body() data: AddSituacaoToVeiculoDTO) {
    return this.veiculoService.addSituacao(data);
  }

  @Get()
  async findAll() {
    return this.veiculoService.findAll();
  }

  @Get(':placa')
  async encontrarVeiculoPlaca(@Param('placa') placa: string) {
    return this.veiculoService.encontrarVeiculoPlaca(placa);
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
