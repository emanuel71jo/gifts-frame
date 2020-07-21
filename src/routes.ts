import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ error: "Hello World" })
})

export default routes;
