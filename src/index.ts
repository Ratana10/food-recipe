import express, { Request, Response } from "express";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import router from "./routers";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const port = process.env.PORT || 3000;

// Mongodb connection
mongoose
  .connect("mongodb://localhost:27017/db_food_recipe")
  .then(() => console.log("Mongodb connected ..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/", router);


// Global error handler
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
