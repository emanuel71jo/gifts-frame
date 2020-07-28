import { Request, Response, response } from 'express';
import { getRepository } from 'typeorm';
import Gift from '@entities/Gift';
import Party from '@entities/Party';

class GiftController {
  async index(request: Request, response: Response) {
    try {
      const repository = getRepository(Gift);

      const { party_id } = request.params;

      const gifts = await repository.find({
        where: { partyId: party_id },
        select: ['id', 'name', 'countGifts'],
      });

      return response.json(gifts);
    } catch (error) {
      return response.status(401).json({ error: 'Party did not find' });
    }
  }

  async store(request: Request, response: Response) {
    try {
      const repository = getRepository(Gift);

      const { name, party_id } = request.body;

      const partyRepository = getRepository(Party);

      const partyExists = await partyRepository.find({
        where: {
          celebrantId: request.userId,
          id: party_id,
        },
      });

      if (partyExists.length === 0) {
        throw new Error('Party does not exists');
      }
      const gift = repository.create({
        name,
        partyId: party_id,
      });

      await repository.save(gift);

      return response.json(gift);
    } catch (error) {
      return response.status(404).json({ error: 'Party does not exists' });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const repository = getRepository(Gift);

      const { id } = request.params;

      await repository.delete({ id });

      return response.json({ message: 'Gift removed' });
    } catch (error) {
      return response.status(404).json({ error: 'Gift did not find' });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const repository = getRepository(Gift);

      const gift = await repository.findOne({ where: { id } });

      gift.countGifts = gift.countGifts + 1;

      await repository.save(gift);

      return response.json(gift);
    } catch (error) {
      return response.status(404).json({ error: 'Gift did not find' });
    }
  }
}

export default new GiftController();
