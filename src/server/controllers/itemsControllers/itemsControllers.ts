import type { Request, Response } from "express";
import type { ItemStructure } from "../../../database/models/Item/Item.js";
import Item from "../../../database/models/Item/Item.js";
import type { CustomRequest } from "../../types.js";

export const getItems = async (req: CustomRequest, res: Response) => {
  const { userId } = req;

  const items = await Item.find({ owner: userId });

  res.status(200).json({ items });
};

export const createItems = async (req: Request, res: Response) => {
  const { madeIn, name } = req.body as ItemStructure;

  const newItem = await Item.create({
    madeIn,
    name,
  });

  res.status(201).json({ newItem });
};
