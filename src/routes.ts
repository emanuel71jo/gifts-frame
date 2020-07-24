import { Router } from 'express';

import CelebrantController from '@controllers/CelebrantController';
import PartyController from '@controllers/PartyController';
import AuthController from '@controllers/AuthController';

import authMiddleware from '@middlewares/authMiddleware';

const routes = Router();

routes.post('/authenticate', AuthController.authenticate);
routes.post('/signup', CelebrantController.store);

routes.use(authMiddleware);

routes.post('/party', PartyController.store);

export default routes;
