import chalk from "chalk";
import debugCreator from "debug";
import type { NextFunction, Request, Response } from "express";
import type CustomError from "../../CurstomError/CustomError.js";

const debug = debugCreator("items:middleware");

export const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({ message: "Endpoint not found" });
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const publicMessage = error.publicMessage || "Something went wrong";

  debug(chalk.red(`Error ${error.message}`));

  res.status(statusCode).json({ error: publicMessage });
};
