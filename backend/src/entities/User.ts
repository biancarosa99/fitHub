import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  BeforeInsert,
} from "typeorm";
import Appointment from "./Appointment";
import UserSubscription from "./UserSubscription";
import { IsEmail, Length } from "class-validator";
import bcrypt = require("bcrypt");

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @IsEmail(undefined, { message: "Must be a valid email" })
  @Length(1, 255, { message: "Must not be empty" })
  @Column({ unique: true })
  mail: string;

  @Length(6, 24, { message: "Must be at least 6 characters long" })
  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  isTrainer: boolean;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToMany(
    () => UserSubscription,
    (userSubscription) => userSubscription.user
  )
  userSubscriptions: UserSubscription[];

  @BeforeInsert()
  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }
}
