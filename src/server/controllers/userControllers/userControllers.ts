import type { NextFunction, Request, Response } from "express";

import bcrypt from "bcryptjs";
import type Credentials from "./types.js";
import User from "../../../database/models/User/User.js";

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body as Credentials;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      user: { id: newUser._id, username },
    });
  } catch (error: unknown) {}
};
