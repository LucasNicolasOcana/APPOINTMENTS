"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const appointmentsServices = __importStar(require("../services/appointmentsServices"));
const getAppointments = (req, res) => {
    const appointments = appointmentsServices.getAllAppointments();
    res.json(appointments);
};
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => {
    const appointmentId = parseInt(req.params.id);
    const appointment = appointmentsServices.getAppointmentById(appointmentId);
    if (appointment) {
        res.json(appointment);
    }
    else {
        res.status(404).send("No se encontraron turnos");
    }
};
exports.getAppointmentById = getAppointmentById;
const scheduleAppointment = (req, res) => {
    const { date, time, userId } = req.body;
    try {
        appointmentsServices.createAppointment(date, time, userId);
        res.send("Nuevo turno agendado exitosamente");
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(`Error al agendar el turno: ${error.message}`);
        }
        else {
            res.status(500).send(`Error al agendar el turno`);
        }
    }
};
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield appointmentsServices.cancelAppointment(parseInt(id));
        res.send("El turno ha sido cancelado exitosamente");
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(`Error al cancelar el turno: ${error.message}`);
        }
        else {
            res.status(500).send(`Error al cancelar el turno`);
        }
    }
});
exports.cancelAppointment = cancelAppointment;
