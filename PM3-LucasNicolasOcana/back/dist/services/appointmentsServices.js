"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
let appointments = [];
const getAllAppointments = () => {
    return appointments.map((appointment) => ({
        id: appointment.id,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: appointment.status,
    }));
};
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (id) => {
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
exports.getAppointmentById = getAppointmentById;
const createAppointment = (date, time, userId) => {
    const id = appointments.length + 1;
    appointments.push({ id, date, time, userId, status: "active" });
};
exports.createAppointment = createAppointment;
const cancelAppointment = (id) => {
    const appointmentIndex = appointments.findIndex((appointment) => appointment.id === id);
    if (appointmentIndex !== -1) {
        appointments[appointmentIndex].status = "cancelled";
    }
    else {
        throw new Error(`Appointment with id ${id} not found`);
    }
};
exports.cancelAppointment = cancelAppointment;
