import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import { parseISO, isAfter } from 'date-fns';
import Party from '@entities/Party';

class PartyController {
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
}

export default new PartyController();
