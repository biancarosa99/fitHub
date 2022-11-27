import {
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Entity,
  Timestamp,
} from "typeorm";
import Appointment from "./Appointment";
import FitnessClass from "./FitnessClass";
import Location from "./Location";

@Entity()
export default class ScheduledClass extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamptz" })
  date: Date;

  // @Column()
  // available_spots: number;

  @Column()
  remaining_spots: number;

  @OneToMany(() => Appointment, (appointment) => appointment.scheduledClass)
  appointments: Appointment[];

  @ManyToOne(() => FitnessClass, (fitnessClass) => fitnessClass)
  fitnessClass: FitnessClass;

  @ManyToOne(() => Location, (location) => location)
  location: Location;
}
