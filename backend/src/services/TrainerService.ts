import { Request, Response, Router } from "express";
import ScheduledClass from "../entities/ScheduledClass";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";

export const createClass = async (req: AuthenticatedRequest, res: Response) => {
  const { date, remaining_spots, fitnessClassId, locationId } = req.body;
  const { tkUser } = req;
  console.log(tkUser);
  try {
    if (!tkUser.isTrainer) return res.status(401).json("Not a trainer");

    const scheduledClass = myDataSource.getRepository(ScheduledClass).create({
      date,
      remaining_spots,
      fitnessClass: fitnessClassId,
      location: locationId,
    });
    await scheduledClass.save();
    return res.json(scheduledClass);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
