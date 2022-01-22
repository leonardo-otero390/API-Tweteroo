import { Router } from 'express';
import {
  insertTweet,
  get10LastTweets,
} from '../controllers/tweetsController.js';
import { signUp } from '../controllers/usersController.js';

const routes = new Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});

routes.post('/sign-up', signUp);
routes.post('/tweets', insertTweet);
routes.get('/tweets', get10LastTweets);

export default routes;
