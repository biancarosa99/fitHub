import {
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Entity,
} from "typeorm";
import UserSubscription from "./UserSubscription";
import { IPostgresInterval } from "postgres-interval";
import * as dayjs from "dayjs";
dayjs().format();
import duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

@Entity()
export default class Subscription extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  duration: number;

  @Column()
  price: number;

  @OneToMany(
    () => UserSubscription,
    (userSubscription) => userSubscription.subscription
  )
  userSubscriptions: UserSubscription[];
}
