import { Injectable } from '@nestjs/common';
import { CriarAlertaDTO } from './dto/CriarAlerta.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as csvParse from 'csv-parse';
import * as fs from 'fs';
interface AlertaCsvDTO {
  nome: string;
  descricao: string;
  tipo: string;
  situacao: string;
  status: string;
}
@Injectable()
export class AlertaService {
  constructor(private prisma: PrismaService) {}

  async createAlerta(data: CriarAlertaDTO) {
    const alertaExists = await this.prisma.alerta.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (alertaExists) {
      throw new Error('Alerta já existe');
    }

    const alerta = await this.prisma.alerta.create({
      data,
    });

    return alerta;
  }

  async createAlertaCSV(file: Express.Multer.File): Promise<void> {
    const alertas: CriarAlertaDTO[] = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream(file.path)
        .pipe(
          csvParse.parse({
            delimiter: ',',
            columns: true,
            ltrim: true,
          }),
        )
        .on('data', async (row) => {
          const alerta = row;
          alertas.push(alerta);
        })
        .on('error', function (error) {
          console.log(error.message);
        })
        .on('end', function () {
          console.log('finished');
          fs.unlink(file.path, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(alertas);
            }
          });
        });
    });

    for (const alerta of alertas) {
      await this.prisma.alerta.create({
        data: alerta,
      });
    }
  }

  async findAll() {
    const alertas = await this.prisma.alerta.findMany();

    return alertas;
  }

  async update(id: string, data: CriarAlertaDTO) {
    const alerta = await this.prisma.alerta.update({
      where: {
        id,
      },
      data,
    });

    return alerta;
  }

  async delete(id: string) {
    const alerta = await this.prisma.alerta.delete({
      where: {
        id,
      },
    });

    return alerta;
  }
}
