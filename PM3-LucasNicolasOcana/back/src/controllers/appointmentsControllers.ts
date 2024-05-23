import { Request, Response } from "express";
import * as appointmentsServices from "../services/appointmentsServices";

export const getAppointments = (req: Request, res: Response) => {
  const appointments = appointmentsServices.getAllAppointments();
  res.json(appointments);
};

export const getAppointmentById = (req: Request, res: Response) => {
  const appointmentId = parseInt(req.params.id);
  const appointment = appointmentsServices.getAppointmentById(appointmentId);
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).send("No se encontraron turnos");
  }
};

export const scheduleAppointment = (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  try {
    appointmentsServices.createAppointment(date, time, userId);
    res.send("Nuevo turno agendado exitosamente");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error al agendar el turno: ${error.message}`);
    } else {
      res.status(500).send(`Error al agendar el turno`);
    }
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await appointmentsServices.cancelAppointment(parseInt(id));
    res.send("El turno ha sido cancelado exitosamente");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error al cancelar el turno: ${error.message}`);
    } else {
      res.status(500).send(`Error al cancelar el turno`);
    }
  }
};
