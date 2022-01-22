import joi from 'joi';
import tweets from '../database/tweets.js';

const tweetSchema = joi.object({
  username: joi.string().min(1).required(),
  tweet: joi.string().min(1).required(),
});

export async function insertTweet(req, res) {
  const newTweet = req.body;
  const validation = tweetSchema.validate(newTweet);
  if (validation.error)
    return res.status(400).send('Todos os campos são obrigatórios!');
  tweets.push(newTweet);
  return res.status(201).send('OK');
}

export async function get10LastTweets(req, res) {
  const last10 = tweets.slice(-10);
  res.send(last10);
}

export async function findTweetsByUsername(req, res) {
  const { username } = req.params;
  const usersTweets = tweets.filter((tweet) => tweet.username === username);
  return res.send(usersTweets);
}
