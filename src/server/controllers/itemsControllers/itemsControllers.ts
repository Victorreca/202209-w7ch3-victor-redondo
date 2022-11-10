import type { Request, RequestHandler, Response } from "express";
import fs from "fs/promises";
import path from "path";
import type { ItemStructure } from "../../../database/models/Item/Item.js";
import Item from "../../../database/models/Item/Item.js";
import type { CustomRequest } from "../../types.js";

export const getItems = async (req: CustomRequest, res: Response) => {
  const { userId } = req;

  const items = await Item.find({ owner: userId });

  res.status(200).json({ items });
};

export const createItems: RequestHandler = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, ItemStructure>,
  res: Response
) => {
  const { madeIn, name } = req.body;

  await fs.rename(
    path.join("assets", "images", req.file.filename),
    path.join("assets", "images", req.file.originalname)
  );

  const newItem = await Item.create({
    madeIn,
    name,
    picture: req.file.filename,
  });

  res
    .status(201)
    .json({ newItem, picture: `assets/images/${newItem.picture}` });
};
