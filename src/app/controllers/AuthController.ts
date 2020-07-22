import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Celebrant from '@entities/Celebrant';

class AuthController {
  async authenticate(request: Request, response: Response) {
    const repository = getRepository(Celebrant);

    const { email, password } = request.body;

    const celebrant = await repository.findOne({ where: { email } });

    if (!celebrant) {
      return response
        .status(401)
        .json({ error: 'Celebrant does not authorized' });
    }

    const isValidPassword = await compare(password, celebrant.password);

    if (!isValidPassword) {
      return response
        .status(401)
        .json({ error: 'Celebrant does not authorized' });
    }

    delete celebrant.password;

    const token = sign({ id: celebrant.id }, 'secret', { expiresIn: '1d' });

    return response.json({ celebrant, token });
  }
}

export default new AuthController();
