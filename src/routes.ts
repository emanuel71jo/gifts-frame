import { Router } from 'express';

import CelebrantController from '@controllers/CelebrantController';

const routes = Router();

routes.post('/signup', CelebrantController.store);

export default routes;
