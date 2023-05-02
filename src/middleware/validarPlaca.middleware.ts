import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidarPlacaMiddleware implements NestMiddleware {
  validarPlaca(placa: string) {
    const regexPlacaMercoSul = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

    if (!regexPlacaMercoSul.test(placa)) {
      return false;
    }
    return true;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { placa } = req.body;

    if (placa) {
      if (this.validarPlaca(placa)) {
        next();
      } else {
        return res.status(400).send({ error: 'Placa Inválida' });
      }
    } else {
      next();
    }
  }
}
