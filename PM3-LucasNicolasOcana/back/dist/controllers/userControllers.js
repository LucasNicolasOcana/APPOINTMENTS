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
exports.loginUser = exports.registerUser = exports.getUserById = exports.getAllUsers = void 0;
const UserService = __importStar(require("../services/usersServices"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserService.getAllUsers();
        const formattedUsers = users.map((user) => ({
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
            username: user.username,
            password: user.password,
            id: user.id,
        }));
        res.json(formattedUsers);
    }
    catch (error) {
        res.status(500).send(`Error al obtener usuarios: ${error.message}`);
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = UserService.getUserById(userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send("Usuario no encontrado");
    }
};
exports.getUserById = getUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res
            .status(400)
            .send("Falta información requerida para registrar un usuario.");
    }
    try {
        const userDTO = {
            name,
            email,
            birthdate,
            nDni,
            username,
            password,
        };
        yield UserService.createUser(userDTO);
        res.status(201).send("Usuario Registrado!");
    }
    catch (error) {
        res.status(500).send(`Error al registrar usuario: ${error.message}`);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credentials = yield UserService.checkCredentials(username, password);
        if (credentials) {
            res.status(200).send("Ingreso éxitoso!");
        }
        else {
            res.status(401).send("Datos inválidos!");
        }
    }
    catch (error) {
        res.status(500).send(`Error al autenticar usuario: ${error.message}`);
    }
});
exports.loginUser = loginUser;
