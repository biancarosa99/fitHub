import { Request, Response } from "express";
import Subscription from "../entities/Subscription";
import Location from "../entities/Location";
import FitnessClass from "../entities/FitnessClass";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";
import * as dayjs from "dayjs";
dayjs().format();
import duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

export const createLocation = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { name, address } = req.body;
  const { tkUser } = req;

  if (!tkUser.isAdmin)
    return res
      .status(401)
      .json("You are not authenticaded create a new location");

  try {
    const location = myDataSource.getRepository(Location).create({
      name,
      address,
    });
    const result = await location.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const convertInterval = (interval: duration.Duration) => {
  return {
    years: interval.get("years"),
    months: interval.get("months"),
    days: interval.get("days"),
  };
};

export const createFitnessClass = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { name, description, duration, level, available_spots } = req.body;
  const { tkUser } = req;

  console.log(tkUser);

  if (!tkUser.isAdmin)
    return res
      .status(401)
      .json("You are not authenticaded to create a subscription");

  try {
    const fitnessClass = myDataSource.getRepository(FitnessClass).create({
      name,
      description,
      duration,
      level,
      available_spots,
    });
    const result = await fitnessClass.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const createSubscription = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { name, price, duration } = req.body;
  const { tkUser } = req;

  if (!tkUser.isAdmin)
    return res
      .status(401)
      .json("You are not authenticaded to create a subscription");
  try {
    const subscription = myDataSource.getRepository(Subscription).create({
      name,
      duration,
      price,
    });
    const result = await subscription.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { createFitnessClass, createSubscription, createLocation };
