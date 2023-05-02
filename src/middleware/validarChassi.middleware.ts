import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidarChassiMiddleware implements NestMiddleware {
  validarChassi(chassi: string): boolean {
    chassi = chassi.replace(/\s|-/g, '');

    const regexChassi = /^[a-hj-npr-zA-HJ-NPR-Z0-9]{13}[0-9]{4}$/;

    if (regexChassi.test(chassi)) {
      return true;
    }
    return false;
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { chassi } = req.body;
    if (chassi) {
      if (this.validarChassi(chassi)) {
        next();
      } else {
        return res.status(400).send({ error: 'Chassi Inválido' });
      }
    } else if (!chassi) {
      next();
    }
  }
}
