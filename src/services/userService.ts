import User from "../models/user";
import { IUser } from "../types";

class UserService {

  static async findById(id: string) {
    const user = User.findById(id);

    return user;
  }
}

export default UserService;
