import { Request, Response } from "express";
import User from "../entities/User";
import Appointment from "../entities/Appointment";
import FitnessClass from "../entities/FitnessClass";
import { myDataSource } from "../app-data-source";
import { AuthenticatedRequest } from "../middleware/verifyToken";
import ScheduledClass from "../entities/ScheduledClass";
import UserSubscription from "../entities/UserSubscription";
import Subscription from "../entities/Subscription";
import {
  isSubscriptionValid,
  checkSubscriptionDuplicates,
} from "../utils/helperFunctions";
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
// trebe facuta o functie sa te stergi de pe appointment - check
// poti sa faci appointmenturi doar pana la data cant iti expira subscriptionu - check
// schimba la buysubscription din days in months - check
// nu poti sa ti cumperi subscriptionuri care si dau overlap - check
// vezi care i treaba cu eager si relations
// verifica daca merge daca userul nu are subs valid dar alt user are - check
// sa nu pui 2 fitness classes in acelasi timp -check
// orar pe sapt curenta - important - check (mai trebuie adaugate raltions)
// imagini pt fitness class
// de aplicat ca un user sa fie trainer - mai pe final - trebuie adaugata si entitate pt asta
// pt admin sa accepte sau sa de a deny la invitatie - tot pe final
// functii de get info
// fa si o functie care arata cate spoturi sunt libere - to do
// de adaugat get subscription type info
// de adaugat get fitnessclassinfo
// get fitness class info idk yet
// get trainer classes - done vezi de relations!!
// get user's appointments -check
// get users from an appointment -check
// gandeste te ce requesturi trebe paginate
// schimba din remaining spots in max spots
// cant make appointments in the past
// cant make fitness classes in the past
// mai verifica la functii unde trebe daca e trainer and shit
// get subscription types info
// verifica unde mai trebe query si unde body
// oraru e pe locatii

export const makeAppointment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  const { scheduledClassId }: { scheduledClassId: string } = req.body;

  const valid = await isSubscriptionValid(tkUser.id, scheduledClassId);
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

export const removeAppointment = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { appointmentId } = req.params;
  const { tkUser } = req;

  try {
    const appointment = await myDataSource.getRepository(Appointment).findOne({
      where: {
        id: appointmentId,
      },
    });

    if (tkUser.id !== appointment.user.id)
      return res
        .status(401)
        .json("You are not authorized to remove this appointment!");

    await myDataSource.getRepository(Appointment).remove(appointment);
    return res.json("Product deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//start date o sa fie data din front ca fiind ora la care se cumpara subscriptionu.
export const buySubscription = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  const { start_date, subscriptionId } = req.body;

  const valid = await checkSubscriptionDuplicates(tkUser.id, start_date);
  if (!valid)
    return res
      .status(403)
      .json("User already has a subscription that is overlaping this period!");

  const subscriptionType = await myDataSource
    .getRepository(Subscription)
    .findOne({
      where: {
        id: subscriptionId,
      },
    });

  try {
    const start = dayjs(start_date);
    const end = start.add(subscriptionType.duration, "months");

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

export const getUserAppointments = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  try {
    const scheduledAppointments = await myDataSource
      .getRepository(Appointment)
      .find({
        where: {
          user: {
            id: tkUser.id,
          },
        },
        order: {
          scheduledClass: {
            date: "ASC",
          },
        },
      });
    const now = dayjs();
    const result = scheduledAppointments.filter((appointment) =>
      dayjs(appointment.scheduledClass.date).isSameOrAfter(now)
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

export const getPastUserAppointments = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { tkUser } = req;
  try {
    const scheduledAppointments = await myDataSource
      .getRepository(Appointment)
      .find({
        where: {
          user: {
            id: tkUser.id,
          },
        },
        order: {
          scheduledClass: {
            date: "ASC",
          },
        },
      });
    const now = dayjs();
    const result = scheduledAppointments.filter((appointment) =>
      dayjs(now).isSameOrAfter(appointment.scheduledClass.date)
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong!");
  }
};

module.exports = {
  getUser,
  makeAppointment,
  removeAppointment,
  buySubscription,
  getUserAppointments,
  getPastUserAppointments,
};
