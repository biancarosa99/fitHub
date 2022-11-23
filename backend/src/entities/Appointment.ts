import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import ScheduledClass from "./ScheduledClass";
import User from "./User";

@Entity()
export default class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user)
  user: User;

  @ManyToOne(() => ScheduledClass, (scheduledClass) => scheduledClass)
  scheduledClass: ScheduledClass;
}