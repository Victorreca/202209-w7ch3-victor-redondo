import express from "express";
import morgan from "morgan";
import { generalError, notFoundError } from "./server/middleware/errors.js";
import itemRouter from "./server/routers/itemRouter.js";
import userRouter from "./server/routers/userRouter.js";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/items", itemRouter);

app.use(generalError);
app.use(notFoundError);

export default app;
