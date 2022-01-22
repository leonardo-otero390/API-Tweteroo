import { Router } from 'express';
import { signUp } from '../controllers/users.controller.js';

const routes = new Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});

routes.post('/sign-up', signUp);

export default routes;
