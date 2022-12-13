import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import Subscription from "../entities/Subscription";

export const getSubscriptions = async (req: Request, res: Response) => {
  try {
    const subscriptions = await myDataSource.getRepository(Subscription).find({
      order: {
        price: "ASC",
      },
    });
    return res.status(200).json(subscriptions);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

module.exports = { getSubscriptions };
