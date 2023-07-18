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
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_1 = __importDefault(require("../../models/mod_user/usuario"));
const bitacora_1 = require("../../controllers/mod_user/bitacora");
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = yield usuario_1.default.findAll();
    yield (0, bitacora_1.saveBitacora)({
        token: req.header('token'),
        accion: 'Obtener los datos de todos los usuarios'
    });
    res.json({ obj });
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield usuario_1.default.findByPk(id);
    if (obj) {
        yield (0, bitacora_1.saveBitacora)({
            token: req.header('token'),
            accion: 'Obtener los datos de un usuario'
        });
        res.json({ obj });
    }
    else {
        res.status(404).json({
            msg: `No existe un Usuario con el id : ${id}`
        });
    }
});
exports.get = get;
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const obj = new usuario_1.default(body);
        // Encriptar la contraseña
        const salt = bcrypt_1.default.genSaltSync();
        obj.password = bcrypt_1.default.hashSync(obj.password, salt);
        yield obj.save();
        // Guardar en la bitacora
        yield (0, bitacora_1.saveBitacora)({
            token: req.header('token'),
            accion: 'Creación de un Usuario'
        });
        res.json({
            msg: 'El Usuario se creo correctamente',
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
        const obj = yield usuario_1.default.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el Usuario con ese ID`,
            });
        }
        if (body.password) {
            // Encriptar la contraseña
            const salt = bcrypt_1.default.genSaltSync();
            body.password = bcrypt_1.default.hashSync(body.password, salt);
        }
        yield obj.update(body);
        yield (0, bitacora_1.saveBitacora)({
            token: req.header('token'),
            accion: 'Actualizar los datos de un usuario'
        });
        res.json({
            msg: `El Usuario con el id ${id} fue actualizado correctamente`,
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
    const obj = yield usuario_1.default.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Usuario con el id: ' + id
        });
    }
    yield obj.destroy();
    yield (0, bitacora_1.saveBitacora)({
        token: req.header('token'),
        accion: 'Eliminar los datos de un usuario permanentemente'
    });
    res.json({
        msg: `El Usuario con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
});
exports.delet = delet;
const deletState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield usuario_1.default.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Usuario con el id : ' + id
        });
    }
    yield obj.update({ estado: false });
    yield (0, bitacora_1.saveBitacora)({
        token: req.header('token'),
        accion: 'Eliminar los datos de un usuario'
    });
    res.json({
        msg: `El Usuario con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
});
exports.deletState = deletState;
//# sourceMappingURL=usuario.js.map