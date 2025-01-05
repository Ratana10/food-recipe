import NotFound from "../config/notFound";
import User from "../models/user";
import { IUser } from "../types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
  static async create(data: IUser) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const user = await User.create({
      email: data.email,
      name: data.name,
      password: hashedPassword,
    });

    // Generate Token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        name: user.name,
      },
      "JWT_SECRET",
      { expiresIn: "1d" }
    );
    
    return {
      user,
      token,
    };
  }
  static async findAll() {
    const users = await User.find();

    return users;
  }

  static async findById(id: string) {
    const user = await User.findById(id);
    if (!user) {
      throw new NotFound("User not found");
    }
    return user;
  }
}

export default UserService;
