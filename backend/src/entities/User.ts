import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import Appointment from "./Appointment";
import UserSubscription from "./UserSubscription";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  mail: string;

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
}
