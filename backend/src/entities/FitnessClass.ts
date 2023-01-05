import {
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Entity,
} from "typeorm";
import ScheduledClass from "./ScheduledClass";

@Entity()
export default class FitnessClass extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  level: string;

  @Column()
  imgURL: string;

  @OneToMany(
    () => ScheduledClass,
    (scheduledClass) => scheduledClass.fitnessClass
  )
  scheduledClasses: ScheduledClass[];
}
