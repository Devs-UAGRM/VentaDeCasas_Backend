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
exports.deleteRolState = exports.deleteRol = exports.putRol = exports.postRol = exports.getRol = exports.getRols = void 0;
const rol_1 = __importDefault(require("../models/rol"));
const getRols = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rol = yield rol_1.default.findAll();
    res.json({ rol });
});
exports.getRols = getRols;
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (rol) {
        res.json({ rol });
    }
    else {
        res.status(404).json({
            msg: `No existe un rol con el id : ${id}`
        });
    }
});
exports.getRol = getRol;
const postRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const rol = new rol_1.default(body);
        yield rol.save();
        res.json({
            msg: 'El rol se creo correctamente',
            rol
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postRol = postRol;
const putRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const rol = yield rol_1.default.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                mensaje: `No existen el rol con ese ID`,
            });
        }
        yield rol.update(body);
        res.json(rol);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putRol = putRol;
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (!rol) {
        return res.status(404).json({
            msg: 'No existe el rol con el id: ' + id
        });
    }
    yield rol.destroy();
    res.json({ rol });
});
exports.deleteRol = deleteRol;
const deleteRolState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rol = yield rol_1.default.findByPk(id);
    if (!rol) {
        return res.status(404).json({
            msg: 'No existe el rol con el id : ' + id
        });
    }
    yield rol.update({ estado: false });
    res.json({ rol });
});
exports.deleteRolState = deleteRolState;
//# sourceMappingURL=rol.js.map