import { Body, Controller, Post } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoDTO } from './veiculo.dto';

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  async create(@Body() data: VeiculoDTO) {
    return this.veiculoService.create(data);
  }
}
