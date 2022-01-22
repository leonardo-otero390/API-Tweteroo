import { Router } from 'express';
import * as tweetsController from '../controllers/tweetsController.js';
import { signUp } from '../controllers/usersController.js';

const routes = new Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});

routes.post('/sign-up', signUp);
routes.post('/tweets', tweetsController.insertTweet);
routes.get('/tweets', tweetsController.get10LastTweets);
routes.get('/tweets/:username', tweetsController.findTweetsByUsername);

export default routes;
