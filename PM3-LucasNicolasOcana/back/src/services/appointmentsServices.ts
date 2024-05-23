import { IAppointment } from "../interfaces/IAppointments";
import { AppointmentDTO } from "../dto/appointmentsDto";

let appointments: IAppointment[] = [];

export const getAllAppointments = (): AppointmentDTO[] => {
  return appointments.map((appointment) => ({
    id: appointment.id,
    date: appointment.date,
    time: appointment.time,
    userId: appointment.userId,
    status: appointment.status,
  }));
};

export const getAppointmentById = (id: number): AppointmentDTO | undefined => {
  const appointment = appointments.find((appointment) => appointment.id === id);
  if (appointment) {
    return {
      id: appointment.id,
      date: appointment.date,
      time: appointment.time,
      userId: appointment.userId,
      status: appointment.status,
    };
  }
  return undefined;
};

export const createAppointment = (
  date: Date,
  time: string,
  userId: number
): void => {
  const id = appointments.length + 1;
  appointments.push({ id, date, time, userId, status: "active" });
};

export const cancelAppointment = (id: number): void => {
  const appointmentIndex = appointments.findIndex(
    (appointment) => appointment.id === id
  );
  if (appointmentIndex !== -1) {
    appointments[appointmentIndex].status = "cancelled";
  } else {
    throw new Error(`Appointment with id ${id} not found`);
  }
};
