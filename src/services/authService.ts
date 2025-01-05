import AppError from "../config/appError";
import NotFound from "../config/notFound";
import User from "../models/user";
import { ILogin, IRegister } from "../types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  static async login(data: ILogin) {
    const user = await User.findOne({ email: data.email });

    if (!user) {
      // Not found
      throw new NotFound("User not found");
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password!);
    if (!isPasswordValid) {
      // Invalid credential
      throw new AppError("Invalid email or password", 401);
    }

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

    return token;
  }

  static async register(data: IRegister) {}
}

export default AuthService;
