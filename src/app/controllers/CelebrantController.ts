import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Celebrant from '@entities/Celebrant';

class CelebrantController {
  async store(request: Request, response: Response) {
    const repository = getRepository(Celebrant);

    const { email, password } = request.body;

    const celebrantExists = await repository.findOne({ where: { email } });

    if (celebrantExists) {
      return response.status(409).json({ error: 'Celebrant already exists' });
    }

    const celebrant = repository.create({ email, password });

    await repository.save(celebrant);

    return response.json(celebrant);
  }
}

export default new CelebrantController();
