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
exports.deletState = exports.delet = exports.put = exports.post = exports.get = exports.gets = void 0;
const cuotas_1 = __importDefault(require("../../models/mod_pagos/cuotas"));
const bitacora_1 = require("../mod_user/bitacora");
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = yield cuotas_1.default.findAll();
    yield (0, bitacora_1.saveBitacora)({
        token: req.header('token'),
        accion: 'Obtener los datos de todas las cuotas'
    });
    res.json({ obj });
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield cuotas_1.default.findByPk(id);
    if (obj) {
        yield (0, bitacora_1.saveBitacora)({
            token: req.header('token'),
            accion: 'Obtener los datos de una cuota'
        });
        res.json({ obj });
    }
    else {
        res.status(404).json({
            msg: `No existe una Cuota con el id : ${id}`
        });
    }
});
exports.get = get;
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const obj = new cuotas_1.default(body);
        yield obj.save();
        yield (0, bitacora_1.saveBitacora)({
            token: req.header('token'),
            accion: 'Creacion de una cuota'
        });
        res.json({
            msg: 'La Cuota se creo correctamente',
            obj
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.post = post;
const put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const obj = yield cuotas_1.default.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen una Cuota con ese ID`,
            });
        }
        yield obj.update(body);
        yield (0, bitacora_1.saveBitacora)({
            token: req.header('token'),
            accion: 'Actualizacion de una cuota'
        });
        res.json({
            msg: `La Cuota con el id ${id} fue actualizado correctamente`,
            obj
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.put = put;
const delet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield cuotas_1.default.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe una Cuota con el id: ' + id
        });
    }
    yield obj.destroy();
    yield (0, bitacora_1.saveBitacora)({
        token: req.header('token'),
        accion: 'Eliminacion de una cuota permanentemente'
    });
    res.json({
        msg: `La Cuota con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
});
exports.delet = delet;
const deletState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield cuotas_1.default.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe la Cuota con el id : ' + id
        });
    }
    yield obj.update({ estado: false });
    yield (0, bitacora_1.saveBitacora)({
        token: req.header('token'),
        accion: 'Eliminacion de una cuota'
    });
    res.json({
        msg: `La Cuota con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
});
exports.deletState = deletState;
//# sourceMappingURL=cuotas.js.map