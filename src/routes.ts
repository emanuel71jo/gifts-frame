import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ error: "Hello World" })
})

export default routes;
