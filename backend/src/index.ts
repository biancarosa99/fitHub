const express = require("express");
import cors = require("cors");
import { myDataSource } from "./app-data-source";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();

import authRoutes = require("./controllers/AuthController");
import userRoutes = require("./controllers/UserController");
import trainerRoutes = require("./controllers/TrainerController");
import adminRoutes = require("./controllers/AdminController");
import scheduledClassRoutes = require("./controllers/ScheduledClassController");
import subscriptionRoutes = require("./controllers/SubscriptionController");

myDataSource
  .initialize()
  .then(() => {
    app.use(express.json());
    app.use(cors({ origin: "*", optionSuccessStatus: 200 }));

    app.use(authRoutes);
    app.use(userRoutes);
    app.use(trainerRoutes);
    app.use(adminRoutes);
    app.use(scheduledClassRoutes);
    app.use(subscriptionRoutes);

    app.listen(3000, function () {
      console.log(`Backend server running on port ${3000}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
