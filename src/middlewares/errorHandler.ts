import { Request, Response, NextFunction } from "express";
import AppError from "../config/appError";

interface CustomError extends Error {
  statusCode?: number;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error Details:", err);

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong on the server!",
  });
};

export default errorHandler;
