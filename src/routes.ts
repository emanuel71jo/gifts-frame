import { Router } from 'express';

import AuthController from '@controllers/AuthController';
import CelebrantController from '@controllers/CelebrantController';
import PartyController from '@controllers/PartyController';
import GiftController from '@controllers/GiftController';

import authMiddleware from '@middlewares/authMiddleware';

const routes = Router();

routes.post('/authenticate', AuthController.authenticate);
routes.post('/signup', CelebrantController.store);

routes.use(authMiddleware);

routes.get('/party', PartyController.index);
routes.post('/party', PartyController.store);
routes.delete('/party/:id', PartyController.delete);

routes.get('/gift/:party_id', GiftController.index);
routes.post('/gift', GiftController.store);
routes.delete('/gift/:id', GiftController.delete);
routes.put('/gift/:id', GiftController.update);

export default routes;
