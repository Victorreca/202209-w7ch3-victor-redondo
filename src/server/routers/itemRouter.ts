import express from "express";
import {
  createItems,
  getItems,
} from "../controllers/itemsControllers/itemsControllers.js";

// eslint-disable-next-line new-cap
const itemRouter = express.Router();

itemRouter.get("/list", getItems);
itemRouter.post("/create", createItems);

export default itemRouter;
