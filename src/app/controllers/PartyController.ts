import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { parseISO, isAfter } from 'date-fns';
import Party from '@entities/Party';

class PartyController {
  async index(request: Request, response: Response) {
    try {
      const repository = getRepository(Party);

      const parties = await repository.find({
        where: {
          celebrantId: request.userId,
        },
        select: ['id', 'name', 'partyDateAt', 'canceledAt'],
      });

      return response.json(parties);
    } catch (error) {
      return response
        .status(404)
        .json({ error: 'User does not have any party' });
    }
  }

  async store(request: Request, response: Response) {
    const repository = getRepository(Party);

    const { name, party_date_at } = request.body;

    const isPartyPassAlready = isAfter(new Date(), parseISO(party_date_at));

    if (isPartyPassAlready) {
      return response.status(403).json({ error: 'Party has passed already' });
    }

    const party = repository.create({
      name,
      partyDateAt: parseISO(party_date_at),
      celebrantId: request.userId,
    });

    await repository.save(party);

    return response.json(party);
  }

  async delete(request: Request, response: Response) {
    try {
      const repository = getRepository(Party);

      const { id } = request.params;

      const party = await repository.findOne({
        where: { id, canceledAt: null },
      });

      party.canceledAt = new Date();

      repository.save(party);

      delete party.partyDateAt;
      delete party.celebrantId;

      return response.json(party);
    } catch (error) {
      return response.status(404).json({ error: 'Party did not find' });
    }
  }
}

export default new PartyController();
