import express from "express";
import indexRouter from "./routes/indexRouter";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", indexRouter);

export default app;
