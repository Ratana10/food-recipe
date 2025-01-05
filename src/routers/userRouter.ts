import express, { Request, Response } from "express";
import User from "../models/user";
import { createUser, getAllUser } from "../controllers/userController";

const router = express.Router();

router.post("/", createUser);

router.get("/", getAllUser);

export default router;