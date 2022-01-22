import joi from 'joi';
import users from '../database/users.js';

const imageRegex = /\.(?:png|jpg|jpeg|gif)/;

const userSchema = joi.object({
  username: joi.string().min(1).required(),
  avatar: joi.string().uri().pattern(new RegExp(imageRegex)).required(),
});
export async function signUp(req, res) {
  const newUser = req.body;
  const validation = userSchema.validate(newUser);
  if (validation.error) return res.status(400).send("Todos os campos são obrigatórios!");
  users.push(newUser);
  return res.status(201).send("OK");
}
