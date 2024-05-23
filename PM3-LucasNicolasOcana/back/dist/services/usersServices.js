"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCredentials = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const credentialsServices_1 = require("./credentialsServices");
const credentialsServices_2 = require("./credentialsServices");
let users = [];
const getAllUsers = () => {
    return users.map((user) => {
        const { credentialsId } = user, userData = __rest(user, ["credentialsId"]);
        return Object.assign(Object.assign({}, userData), { credentialsId: 0 });
    });
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => users.find((user) => user.id === id);
exports.getUserById = getUserById;
const createUser = (userDTO) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentialsId = (0, credentialsServices_2.createCredentials)(userDTO.username, userDTO.password);
        const id = users.length + 1;
        const newUser = Object.assign(Object.assign({}, userDTO), { id, credentialsId });
        users.push(newUser);
    }
    catch (error) {
        throw new Error(`Error creating user: ${error}`);
    }
});
exports.createUser = createUser;
const checkCredentials = (username, password) => {
    const credential = credentialsServices_1.credentials.find((cred) => cred.username === username && cred.password === password);
    return credential;
};
exports.checkCredentials = checkCredentials;
