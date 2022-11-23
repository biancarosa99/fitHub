const express = require("express");
import cors = require("cors");
import { myDataSource } from "./app-data-source";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

const authRoutes = require("./controllers/AuthController");

myDataSource
  .initialize()
  .then(() => {
    app.use(express.json());
    app.use(cors({ origin: "*", optionSuccessStatus: 200 }));

    app.use(authRoutes);

    app.listen(3000, function () {
      console.log(`Backend server running on port ${3000}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
