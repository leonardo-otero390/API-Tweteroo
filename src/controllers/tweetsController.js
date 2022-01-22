import joi from 'joi';
import tweets from '../database/tweets.js';

const tweetSchema = joi.object({
  username: joi.string().min(1).required(),
  tweet: joi.string().min(1).required(),
});

export async function insertTweet(req, res) {
  const { tweet } = req.body;
  const username = req.headers.user;
  const newTweet = { tweet, username };
  const validation = tweetSchema.validate(newTweet);
  if (validation.error)
    return res.status(400).send('Todos os campos são obrigatórios!');
  tweets.push(newTweet);
  return res.status(201).send('OK');
}

export async function findTweets(req, res) {
  const { page } = req.query;
  if (!page) return res.send(tweets.slice(-10));
  if (page < 1) return res.sendStatus(400);
  const start = -10 * page;
  const end = tweets.length - 10 * (page - 1);
  return res.send(tweets.slice(start, end));
}

export async function findTweetsByUsername(req, res) {
  const { username } = req.params;
  const usersTweets = tweets.filter((tweet) => tweet.username === username);
  return res.send(usersTweets);
}
