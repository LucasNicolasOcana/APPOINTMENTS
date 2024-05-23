import app from "./server";
import { config } from "dotenv";
import "reflect-metadata";
import { AppDataSource } from "./config/appDataSource";

AppDataSource.initialize();
config();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
