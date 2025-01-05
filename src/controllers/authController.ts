import { Request, Response } from "express";
import AuthService from "../services/authService";

class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await AuthService.login({ email, password });

    res.status(200).json({
      accessToken: token,
    });
  }

  static async register(req: Request, res: Response) {}
}

export default AuthController;
