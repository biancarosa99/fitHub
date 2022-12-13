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

  @Column({ type: "timestamptz" })
  start_date: Date;

  @Column({ type: "timestamptz" })
  end_date: Date;

  @ManyToOne(() => User, (user) => user, { eager: true })
  user: User;

  @ManyToOne(() => Subscription, (subscription) => subscription, {
    eager: true,
  })
  subscription: Subscription;
}
