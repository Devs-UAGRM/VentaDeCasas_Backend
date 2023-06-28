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
exports.deleteAccionState = exports.deleteAccion = exports.putAccion = exports.postAccion = exports.getAccion = exports.getAccions = void 0;
const accion_1 = __importDefault(require("../../models/mod_user/accion"));
const getAccions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accion = yield accion_1.default.findAll();
    res.json({ accion });
});
exports.getAccions = getAccions;
const getAccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const accion = yield accion_1.default.findByPk(id);
    if (accion) {
        res.json({ accion });
    }
    else {
        res.status(404).json({
            msg: `No existe la accion con el id : ${id}`
        });
    }
});
exports.getAccion = getAccion;
const postAccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const accion = new accion_1.default(body);
        yield accion.save();
        res.json({
            msg: 'La accion se creo correctamente',
            accion
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postAccion = postAccion;
const putAccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const accion = yield accion_1.default.findByPk(id);
        if (!accion) {
            return res.status(404).json({
                mensaje: `No existen la accion con ese ID`,
            });
        }
        yield accion.update(body);
        res.json({
            msg: `La accion con el id ${id} fue actualizado correctamente`,
            accion
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putAccion = putAccion;
const deleteAccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const accion = yield accion_1.default.findByPk(id);
    if (!accion) {
        return res.status(404).json({
            msg: 'No existe la accion con el id: ' + id
        });
    }
    yield accion.destroy();
    res.json({
        msg: `La accion con el id ${id} fue eliminada permanentemente con exito..!!!`,
        accion
    });
});
exports.deleteAccion = deleteAccion;
const deleteAccionState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const accion = yield accion_1.default.findByPk(id);
    if (!accion) {
        return res.status(404).json({
            msg: 'No existe la accion con el id : ' + id
        });
    }
    yield accion.update({ estado: false });
    res.json({
        msg: `La accion con el id ${id} fue eliminada con exito..!!!`,
        accion
    });
});
exports.deleteAccionState = deleteAccionState;
//# sourceMappingURL=accion.js.map