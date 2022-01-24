import joi from 'joi';
import tweets from '../database/tweets.js';
import users from '../database/users.js';

const tweetSchema = joi.object({
  username: joi.string().min(1).required(),
  tweet: joi.string().min(1).required(),
});

export async function insertTweet(req, res) {
  const { tweet } = req.body;
  const username = req.headers.user;
  const validation = tweetSchema.validate({ tweet, username });
  const { avatar } = users.find((user) => user.username === username);
  if (validation.error)
    return res.status(400).send('Todos os campos são obrigatórios!');
  tweets.push({ tweet, username, avatar });
  return res.status(201).send('OK');
}

export async function findTweets(req, res) {
  const { page } = req.query;
  if (!page) return res.send(tweets.slice(-10).sort(() => -1));
  if (page < 1) return res.sendStatus(400);
  const start = -10 * page;
  const end = tweets.length - 10 * (page - 1);
  if (end <= 0 && page > 1) return res.send([]);
  return res.send(tweets.slice(start, end).sort(() => -1));
}

export async function findTweetsByUsername(req, res) {
  const { username } = req.params;
  const usersTweets = tweets.filter((tweet) => tweet.username === username);
  return res.send(usersTweets);
}
