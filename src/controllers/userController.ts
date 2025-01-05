import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcrypt';

const createUser = async (req: Request, res: Response) => {
  const {password, ...data} = req.body

  const salt = await bcrypt.genSalt(10);
  const hashedPwd = await bcrypt.hash(password, salt)

  const user = new User({
    ...data,
    password: hashedPwd
  })

  await user.save();

  res.status(201).json({
    message: "user created",
    data: {
      ...user.toJSON(),
      password: undefined
    },
  });

};

const getAllUser = async (req: Request, res: Response) => {
  
  const users = await User.find().select("-password");

  res.status(201).json({
    message: "get all users",
    data: users,
  });
  
};

export { createUser, getAllUser };
