import { User } from "../entities/User";
import { AppDataSource } from "./appDataSource";

export const userModel = AppDataSource.getRepository(User);

export const getAllUsers = userModel.extend({
  async findAllUsersFromDB() {
    const users = this.find({
      relations: {
        appointments: true,
      },
    });
    if (users) {
      return users;
    } else {
      throw Error("No users found");
    }
  },
});
