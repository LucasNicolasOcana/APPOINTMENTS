import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointments } from "../entities/Appointments";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_TYPE } from "./envs";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_TYPE,
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Appointments, Credential],
  subscribers: [],
  migrations: [],
});
