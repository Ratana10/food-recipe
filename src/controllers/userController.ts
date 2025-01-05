import { NextFunction, Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  static async create(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body;
    try {
      const user = await UserService.create({ email, password, name });
      res.status(201).json({
        message: "user created",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.findAll();
      res.status(200).json({
        message: "user get all",
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const user = await UserService.findById(id);
      res.status(200).json({
        message: "get user by id successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
