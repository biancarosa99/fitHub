import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import User from "./User";
import Subscription from "./Subscription";

@Entity()
export default class UserSubscription extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @ManyToOne(() => User, (user) => user)
  user: User;

  @ManyToOne(() => Subscription, (subscription) => subscription)
  subscription: Subscription;
}
