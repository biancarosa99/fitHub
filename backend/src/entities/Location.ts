import {
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Entity,
} from "typeorm";
import ScheduledClass from "./ScheduledClass";

@Entity()
export default class Location extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => ScheduledClass, (scheduledClass) => scheduledClass.location)
  scheduledClasses: ScheduledClass[];
}
