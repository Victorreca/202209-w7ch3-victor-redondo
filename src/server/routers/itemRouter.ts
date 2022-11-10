import express from "express";
import multer from "multer";
import path from "path";
import {
  createItems,
  getItems,
} from "../controllers/itemsControllers/itemsControllers.js";

// eslint-disable-next-line new-cap
const itemRouter = express.Router();
const upload = multer({
  dest: path.join("assets", "images"),
});

itemRouter.get("/list", getItems);
itemRouter.post("/create", upload.single("picture"), createItems);

export default itemRouter;
