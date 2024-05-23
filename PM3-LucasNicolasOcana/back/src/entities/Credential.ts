import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity({
  name: "credential",
})
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: "active" })
  status: string;

  @OneToOne(() => User)
  @JoinColumn()
  usuarioRelacionado: User;
}
