import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import FitnessClass from "../entities/FitnessClass";

export const getFitnessClasses = async (req: Request, res: Response) => {
  try {
    const fitnessClasses = await myDataSource.getRepository(FitnessClass).find({
      order: {
        name: "ASC",
      },
    });
    return res.status(200).json(fitnessClasses);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

module.exports = { getFitnessClasses };
