import type { NextFunction, Request, Response } from "express";

import bcrypt from "bcryptjs";
import CustomError from "../../../CurstomError/CustomError.js";
import type { Credentials } from "../../types.js";
import User from "../../../database/models/User/User.js";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, email } = req.body as Credentials;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    res.status(201).json({ newUser });
  } catch (error: unknown) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "You couldn't register"
    );
    next(customError);
  }
};
