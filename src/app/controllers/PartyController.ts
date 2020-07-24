import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { parseISO } from 'date-fns';
import Party from '@entities/Party';

class PartyController {
  async store(request: Request, response: Response) {
    const repository = getRepository(Party);

    const { name, party_date_at, userId } = request.body;

    const party = repository.create({
      name,
      party_date_at: parseISO(party_date_at),
      celebrant_id: userId,
    });

    await repository.save(party);

    return response.json(party);
  }
}

export default new PartyController();
