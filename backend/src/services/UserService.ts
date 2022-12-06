import { application, Request, Response, Router } from "express";
import User from "../entities/User";
import Appointment from "../entities/Appointment";
import FitnessClass from "../entities/FitnessClass";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";
import ScheduledClass from "../entities/ScheduledClass";
import UserSubscription from "../entities/UserSubscription";
import Subscription from "../entities/Subscription";
import { isSubscriptionValid } from "../utils/helperFunctions";
import * as dayjs from "dayjs";
dayjs().format();
import duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  const { tkUser } = req;
  try {
    const user = await myDataSource.getRepository(User).findOne({
      where: {
        id: tkUser.id,
      },
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// verifica cate locuri mai sunt libere - check
// nu l lasa pe user sa si faca acelasi app de mai multe ori - check
// trebe facuta o functie sa te stergi de pe appointment
// orar pe sapt curenta - important
// poti sa faci appointmenturi doar pana la data cant iti expira subscriptionu - idk
// schimba la buysubscription din days in months
// nu poti sa ti cumperi subscriptionuri care si dau overlap
export const makeAppointment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  const { scheduledClassId }: { scheduledClassId: string } = req.body;

  const valid = await isSubscriptionValid(tkUser.id);
  if (!valid) return res.status(403).json("Subscription is not valid!");

  const [appointments, appointments_count] = await myDataSource
    .getRepository(Appointment)
    .findAndCount({
      where: {
        scheduledClass: {
          id: scheduledClassId,
        },
      },
    });

  const already_appointed = appointments.find(
    (appointment) => appointment.user.id === tkUser.id
  );
  if (already_appointed)
    return res
      .status(405)
      .json("You are already appointed to this fitness class!");

  const scheduledClass = await myDataSource
    .getRepository(ScheduledClass)
    .findOne({
      where: {
        id: scheduledClassId,
      },
    });

  if (appointments_count >= scheduledClass.remaining_spots)
    return res
      .status(405)
      .json("Maximum number of people reached for this fitness class!");

  try {
    const appointment = myDataSource.getRepository(Appointment).create({
      user: {
        id: tkUser.id,
      },
      scheduledClass: {
        id: scheduledClassId,
      },
    });

    const result = await appointment.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const buySubscription = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  const { start_date, subscriptionId } = req.body;

  const subscriptionType = await myDataSource
    .getRepository(Subscription)
    .findOne({
      where: {
        id: subscriptionId,
      },
    });

  try {
    const start = dayjs(start_date);
    const end = start.add(subscriptionType.duration, "days");

    const userSubscription = myDataSource
      .getRepository(UserSubscription)
      .create({
        start_date: start,
        end_date: end,
        user: {
          id: tkUser.id,
        },
        subscription: {
          id: subscriptionId,
        },
      });
    const result = await userSubscription.save();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { getUser, makeAppointment, buySubscription };
