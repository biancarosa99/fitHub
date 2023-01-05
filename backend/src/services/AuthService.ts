import { Request, Response } from "express";
import { isEmpty, isEmail } from "class-validator";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import User from "../entities/User";
import { myDataSource } from "../app-data-source";

export const register = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  let errors: any = {};

  let isEmailAvailable: User;

  if (!email) errors.email = "Email can not be empty!";
  if (!password) errors.password = "Password can not be empty!";
  if (!confirmPassword)
    errors.confirmPassword = "Confirm paswword can not be empty!";
  if (!firstName) errors.firstName = "Firstname can not be empty!";
  if (!lastName) errors.lastName = "Lastname can not be empty!";

  if (!isEmail(email)) errors.email = "A valid email is required";

  isEmailAvailable = await myDataSource.getRepository(User).findOne({
    where: {
      email,
    },
  });

  if (isEmailAvailable) errors.email = "Email already taken";

  if (password !== confirmPassword)
    errors.confirmPassword = "Password and ConfirmPassword must match!";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const user = myDataSource.getRepository(User).create({
      email,
      password,
      firstname: firstName,
      lastname: lastName,
    });

    const result = await user.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let errors: any = {};

  if (isEmpty(email)) errors.email = "Email must not be empty";
  if (isEmpty(password)) errors.password = "Password must not be empty";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const user = await myDataSource.getRepository(User).findOneBy({ email });
    if (!user) return res.status(400).json("Invalid email");

    const hashedPassword = await bcrypt.compare(password, user.password);
    if (!hashedPassword) return res.status(401).json("Invalid password");

    const id = user.id;
    const isTrainer = user.isTrainer;
    const isAdmin = user.isAdmin;
    const token = jwt.sign(
      { id, email, isTrainer, isAdmin },
      process.env.ACCESS_TOKEN_SECRET
    );

    return res.json({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { login, register };
