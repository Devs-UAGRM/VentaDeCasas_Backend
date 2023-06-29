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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumTargetaExist = exports.isRolForID = exports.isUserForID = exports.isEmailExist = exports.isRoleADM = exports.isRoleValue = void 0;
const usuario_1 = __importDefault(require("../models/mod_user/usuario"));
const rol_1 = __importDefault(require("../models/mod_user/rol"));
const tarjeta_1 = __importDefault(require("../models/mod_pagos/tarjeta"));
const isRoleValue = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existRole = yield rol_1.default.findOne({ where: { rol: rol } });
        if (!existRole) {
            throw new Error(`El rol ${rol} no está registrado en la base de datos`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el rol: ${error}`);
    }
});
exports.isRoleValue = isRoleValue;
const isRoleADM = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existRole = yield rol_1.default.findOne({ where: { rol: rol } });
        if (!existRole) {
            throw new Error(`El rol ${rol} no está registrado en la base de datos`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el rol: ${error}`);
    }
});
exports.isRoleADM = isRoleADM;
const isEmailExist = (correo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existEmail = yield usuario_1.default.findOne({ where: { correo: correo } });
        if (existEmail) {
            throw new Error(`El correo "${correo}" ya está registrado`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el correo: ${error}`);
    }
});
exports.isEmailExist = isEmailExist;
const isUserForID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existUserID = yield usuario_1.default.findByPk(id);
        if (!existUserID) {
            throw new Error(`El ID ${id} no existe`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el ID: ${error}`);
    }
});
exports.isUserForID = isUserForID;
const isRolForID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existRoleID = yield rol_1.default.findByPk(id);
        if (!existRoleID) {
            throw new Error(`El ID ${id} no existe - Rol`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el Rol - ID: ${error}`);
    }
});
exports.isRolForID = isRolForID;
const isNumTargetaExist = (num_targeta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existEmail = yield tarjeta_1.default.findOne({ where: { num_targeta: num_targeta } });
        if (existEmail) {
            throw new Error(`El numero de Targeta  "${num_targeta}" ya está registrado`);
        }
    }
    catch (error) {
        throw new Error(`Error al verificar el numero de Targeta: ${error}`);
    }
});
exports.isNumTargetaExist = isNumTargetaExist;
//# sourceMappingURL=db-validators.js.map