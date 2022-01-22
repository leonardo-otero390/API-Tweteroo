import tweets from "../database/tweets.js";

export async function insertTweet(req, res) {
  const newTweet = req.body;
  tweets.push(newTweet);
  console.log(tweets);
  res.sendStatus(200);
}
