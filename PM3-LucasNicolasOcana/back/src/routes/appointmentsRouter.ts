import express from "express";
import * as appointmentsControllers from "../controllers/appointmentsControllers";

const router = express.Router();

router.get("/", appointmentsControllers.getAppointments);
router.get("/:id", appointmentsControllers.getAppointmentById);
router.post("/schedule", appointmentsControllers.scheduleAppointment);
router.put("/cancel/:id", appointmentsControllers.cancelAppointment);

export default router;
