import users from '../database/users.js';

export async function signUp(req, res) {
  const newUser = req.body;
  users.push(newUser);
  res.sendStatus(200);
}
