import AppError from "./appError";

class NotFound extends AppError {
  constructor(message: string = "Not found") {
    super(`${message}`, 404);
  }
}

export default NotFound;
