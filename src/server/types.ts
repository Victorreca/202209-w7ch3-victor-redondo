import type { Request } from "express";

export interface Credentials {
  username: string;
  password: string;
  email: string;
}

export interface CustomRequest extends Request {
  userId: string;
}

export interface ItemStructure {
  madeIn: string;
  name: string;
  owner: string;
}
