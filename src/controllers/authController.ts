import { NextFunction, Request, Response } from "express";
import AuthService from "../services/authService";

class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const token = await AuthService.login({ email, password });

      res.status(200).json({
        accessToken: token,
      });
    } catch (error) {
      next(error);
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
