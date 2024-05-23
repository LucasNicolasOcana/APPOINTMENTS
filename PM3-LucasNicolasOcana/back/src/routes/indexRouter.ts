import express from "express";
import userRoutes from "./userRouter";
import appointmentRoutes from "./appointmentsRouter";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);

export default router;
