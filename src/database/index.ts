import chalk from "chalk";
import debugCreator from "debug";
import mongoose from "mongoose";

const debug = debugCreator("items:root");

const connectDatabase = async (url: string) => {
  try {
    await mongoose.connect(url);
    debug(chalk.green("Connection to data base was successfull"));
  } catch (error: unknown) {
    debug(chalk.red("Error on connection", (error as Error).message));
  }
};

export default connectDatabase;
