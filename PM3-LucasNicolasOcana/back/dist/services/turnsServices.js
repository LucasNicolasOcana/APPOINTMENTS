"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
var appointments = [];
var getAllAppointments = function () {
    return appointments.map(function (appointment) { return ({
        id: appointment.id,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: appointment.status,
    }); });
};
exports.getAllAppointments = getAllAppointments;
var getAppointmentById = function (id) {
    var appointment = appointments.find(function (appointment) { return appointment.id === id; });
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
var createAppointment = function (date, time, userId) {
    var id = appointments.length + 1;
    appointments.push({ id: id, date: date, time: time, userId: userId, status: "active" });
};
exports.createAppointment = createAppointment;
var cancelAppointment = function (id) {
    var appointmentIndex = appointments.findIndex(function (appointment) { return appointment.id === id; });
    if (appointmentIndex !== -1) {
        appointments[appointmentIndex].status = "cancelled";
    }
    else {
        throw new Error("Appointment with id ".concat(id, " not found"));
    }
};
exports.cancelAppointment = cancelAppointment;
