import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments",
})
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  date: Date = new Date();

  @Column()
  time: string = "";

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
