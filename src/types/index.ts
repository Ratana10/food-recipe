export interface IRecipe {
  name: string;
  ingredients: string;
  instructions: string;
  imageUrl: string;
  cookingTime: string;
  createdBy: string;
}

export interface IUser {
  name: string;
  password: string;
  email: string;
}

export interface ILogin {
  password: string;
  email: string;
}

export interface IRegister {
  name: string;
  password: string;
  email: string;
}

export interface JwtPayload{
  userId: string;
  email: string;
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}