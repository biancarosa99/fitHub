import UserSubscription from "../entities/UserSubscription";
import * as dayjs from "dayjs";
dayjs().format();
import isBetween = require("dayjs/plugin/isBetween");
import { myDataSource } from "../app-data-source";
import Subscription from "../entities/Subscription";
dayjs.extend(isBetween);

export const isSubscriptionValid = async (userId) => {
  try {
    const subscriptions = await myDataSource
      .getRepository(UserSubscription)
      .find({
        where: {
          user: {
            id: userId,
          },
        },
      });

    const now = dayjs();
    const valid = subscriptions.find(
      (subscription) =>
        dayjs(now).isBetween(
          subscription.start_date,
          subscription.end_date,
          "day",
          "[]"
        ) === true
    );

    if (valid) return true;
    else return false;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { isSubscriptionValid };
