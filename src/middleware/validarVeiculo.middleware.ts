import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidarVeiculoMiddleware implements NestMiddleware {
  validarChassi(chassi: string): boolean {
    chassi = chassi.replace(/\s|-/g, '');

    const regexChassi = /^[a-hj-npr-zA-HJ-NPR-Z0-9]{13}[0-9]{4}$/;

    if (!regexChassi.test(chassi)) {
      return false;
    }
    return true;
  }

  validarPlaca(placa: string) {
    const regexPlacaMercoSul = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

    if (!regexPlacaMercoSul.test(placa)) {
      return false;
    }
    return true;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { placa, chassi } = req.body;
    if (!placa && !chassi) {
      next();
    } else {
      if (this.validarPlaca(placa)) {
        if (this.validarChassi(chassi)) {
          next();
        } else {
          return res.status(400).send({ error: 'Chassi Inválido' });
        }
      } else {
        return res.status(400).send({ error: 'Placa inválida' });
      }
    }
  }
}

//O regexChassi remove as letras "i", "o" e "q", verificando se tem 17 caracteres e se os últimos 4 são números
