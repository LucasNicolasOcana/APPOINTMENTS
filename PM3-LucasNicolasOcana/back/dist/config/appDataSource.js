"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Appointments_1 = require("../entities/Appointments");
const envs_1 = require("./envs");
const Credential_1 = require("../entities/Credential");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_TYPE,
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Appointments_1.Appointments, Credential_1.Credential],
    subscribers: [],
    migrations: [],
});
