"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCredentials = exports.createCredentials = exports.credentials = void 0;
exports.credentials = [];
let currentCredentialId = 1;
const createCredentials = (username, password) => {
    const id = currentCredentialId++;
    const credential = { id, username, password };
    exports.credentials.push(credential);
    return id;
};
exports.createCredentials = createCredentials;
const checkCredentials = (username, password) => {
    const credential = exports.credentials.find((cred) => cred.username === username && cred.password === password);
    return credential ? credential.id : undefined;
};
exports.checkCredentials = checkCredentials;
