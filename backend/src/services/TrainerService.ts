import { query, Request, Response } from "express";
import ScheduledClass from "../entities/ScheduledClass";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";
import { checkScheduledClassAvailability } from "../utils/helperFunctions";
import * as dayjs from "dayjs";
dayjs().format();
import isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
import { LessThan, MoreThan, MoreThanOrEqual } from "typeorm";
import axios from "axios";
dayjs.extend(isSameOrAfter);

export const createFitnessClass = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { date, remaining_spots, fitnessClassId, locationId } = req.body;
  const { tkUser } = req;
  try {
    if (!tkUser.isTrainer) return res.status(401).json("Not a trainer");

    const [valid, errorMessage] = await checkScheduledClassAvailability(
      tkUser.id,
      locationId,
      fitnessClassId,
      date
    );
    if (!valid) return res.status(405).json(errorMessage);

    const scheduledClass = myDataSource.getRepository(ScheduledClass).create({
      date,
      max_spots: remaining_spots,
      fitnessClass: {
        id: fitnessClassId,
      },
      location: {
        id: locationId,
      },
      trainer: {
        id: tkUser.id,
      },
    });
    const result = await scheduledClass.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const removeFitnessClass = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { scheduledClassId } = req.params;
  const { tkUser } = req;

  try {
    if (!tkUser.isTrainer) return res.status(401).json("Not a trainer");

    const scheduledClass = await myDataSource
      .getRepository(ScheduledClass)
      .findOne({
        where: {
          id: scheduledClassId,
        },
      });

    if (tkUser.id !== scheduledClass.trainer.id)
      return res
        .status(401)
        .json("You are not authorized to remove this scheduled class!");

    await myDataSource.getRepository(ScheduledClass).remove(scheduledClass);
    return res.json("Fitness class deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getTrainerClasses = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  const { take, page } = req.query;
  try {
    const now = dayjs();
    const [scheduledClasses, total] = await myDataSource
      .getRepository(ScheduledClass)
      .findAndCount({
        where: {
          trainer: {
            id: tkUser.id,
          },
          date: MoreThanOrEqual(now.toDate()),
        },
        order: {
          date: "ASC",
        },
        take: +take,
        skip: (+page - 1) * +take,
      });

    return res.status(200).json({ scheduledClasses, total });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

export const getPastTrainerClasses = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  const { take, page } = req.query;
  try {
    const now = dayjs();
    const [scheduledClasses, total] = await myDataSource
      .getRepository(ScheduledClass)
      .findAndCount({
        where: {
          trainer: {
            id: tkUser.id,
          },
          date: LessThan(now.toDate()),
        },
        order: {
          date: "ASC",
        },
        take: +take,
        skip: (+page - 1) * +take,
      });

    return res.status(200).json({ scheduledClasses, total });
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

interface MeetingRequest extends Request {
  body: {
    topic: string;
    start_time: string;
    duration: number;
  };
}

export const getAccessToken = async () => {
  const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID;
  const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET;
  const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID;
  const credentials = Buffer.from(
    `${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`
  ).toString("base64");
  const tokenUrl = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ZOOM_ACCOUNT_ID}`;
  try {
    const response = await axios.post(tokenUrl, null, {
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error.response.data);
    throw new Error("Failed to get access token");
  }
};

export const createMeeting = async (req: Request, res: Response) => {
  const { topic, start_time, duration } = req.body;

  try {
    const accessToken = await getAccessToken();
    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic,
        type: 2,
        start_time: "2025-02-12T21:00:00Z",
        duration: 30,
        settings: {
          join_before_host: true,
          participant_video: true,
          host_video: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  createFitnessClass,
  removeFitnessClass,
  getTrainerClasses,
  getPastTrainerClasses,
  getAccessToken,
  createMeeting,
};
