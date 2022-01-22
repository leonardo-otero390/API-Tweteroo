import tweets from '../database/tweets.js';

export async function insertTweet(req, res) {
  const newTweet = req.body;
  tweets.push(newTweet);
  res.sendStatus(200);
}

export async function get10LastTweets(req, res) {
  const last10 = tweets.slice(-10);
  res.send(last10);
}
