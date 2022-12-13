import { Request, Response, Router } from "express";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";
import ScheduledClass from "../entities/ScheduledClass";
import * as dayjs from "dayjs";
dayjs().format();
import duration = require("dayjs/plugin/duration");
import weekday = require("dayjs/plugin/weekday");
import isBetween = require("dayjs/plugin/isBetween");
import Appointment from "../entities/Appointment";
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.extend(weekday);

// adauga relations la query
// pe front iti iei frumos day.js si ca sa ti puna la monday tuesday etc te joci cu dayjsu
export const getCurrentWeekSchedule = async (req: Request, res: Response) => {
  try {
    const scheduledClasses = await myDataSource
      .getRepository(ScheduledClass)
      .find({
        order: {
          date: "ASC",
        },
      });
    const result = scheduledClasses.filter((fitnessClass) =>
      dayjs(fitnessClass.date).isBetween(
        dayjs().weekday(1),
        dayjs().weekday(7),
        "day",
        "[]"
      )
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

export const getScheduledClassUsers = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  // const {tkUser} = req; verificari de genu tkuser !== baza de date user sa nu acceseze altcnv clasele lu asta
  const { scheduledClassId } = req.params;

  try {
    const appointments = await myDataSource.getRepository(Appointment).find({
      where: {
        scheduledClass: {
          id: scheduledClassId,
        },
      },
    });
    const users = appointments.map((appointment) => appointment.user);
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getScheduledClassInfo = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  // const {tkUser} = req; verificari de genu tkuser !== baza de date user sa nu acceseze altcnv clasele lu asta
  const { scheduledClassId } = req.params;

  try {
    const scheduledClass = await myDataSource
      .getRepository(ScheduledClass)
      .findOne({
        where: {
          id: scheduledClassId,
        },
      });
    return res.status(200).json(scheduledClass);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getFitnessClasses = async () => {};

export const getFitnessClassInfo = async () => {};

export const getAvailableSpots = async () => {};

module.exports = { getCurrentWeekSchedule, getScheduledClassUsers };
