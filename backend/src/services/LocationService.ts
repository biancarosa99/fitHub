import { Request, Response } from "express";
import { myDataSource } from "../app-data-source";
import Location from "../entities/Location";

export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await myDataSource.getRepository(Location).find({
      order: {
        name: "ASC",
      },
    });
    return res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

module.exports = { getLocations };
