import type { InferSchemaType } from "mongoose";
import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  madeIn: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
  },
  picture: {
    type: String,
  },
});

export type ItemStructure = InferSchemaType<typeof itemSchema>;

const Item = model("Item", itemSchema, "items");

export default Item;
