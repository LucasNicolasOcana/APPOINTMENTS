"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const dotenv_1 = require("dotenv");
require("reflect-metadata");
const appDataSource_1 = require("./config/appDataSource");
appDataSource_1.AppDataSource.initialize();
(0, dotenv_1.config)();
const PORT = process.env.PORT;
server_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
