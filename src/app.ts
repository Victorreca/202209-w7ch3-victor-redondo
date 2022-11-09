import express from "express";
import morgan from "morgan";
import userRouter from "./server/routers/userRouter.js";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

export default app;
