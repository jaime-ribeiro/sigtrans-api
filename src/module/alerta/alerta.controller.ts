import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { CriarAlertaDTO } from './dto/CriarAlerta.dto';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Alerta')
@Controller('alerta')
export class AlertaController {
  constructor(private readonly alertaService: AlertaService) {}

  @Post()
  async create(@Body() data: CriarAlertaDTO) {
    return this.alertaService.createAlerta(data);
  }

  @Post('/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './tmp',
        filename: (req, file, callback) => {
          const date = Date.now();
          const ext = extname(file.originalname);
          const originalnameNoWhitespace = file.originalname.replace(/\s/g, '');
          const filename = `${originalnameNoWhitespace}-${date}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.alertaService.createAlertaCSV(file);
  }

  @Get()
  async findAll() {
    return this.alertaService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CriarAlertaDTO) {
    return this.alertaService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.alertaService.delete(id);
  }
}
