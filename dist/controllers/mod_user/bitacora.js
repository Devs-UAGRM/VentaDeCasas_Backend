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
exports.deletState = exports.delet = exports.put = exports.post = exports.get = exports.gets = exports.saveBitacora = void 0;
const bitacora_1 = __importDefault(require("../../models/mod_user/bitacora"));
const accion_1 = __importDefault(require("../../models/mod_user/accion"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = __importDefault(require("../../models/mod_user/usuario"));
const saveBitacora = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, accion } = data;
    const id_usuario = yield getUserIdByToken(token);
    const date = new Date().toLocaleString("en-US", { timeZone: "America/La_Paz" });
    const hora = date.split(' ')[1];
    const bitacora = {
        hora_ini: hora,
        hora_fin: hora,
        estado: true,
        id_usuario: id_usuario,
    };
    try {
        const obj = new bitacora_1.default(bitacora);
        const bitacoraCreated = yield obj.save();
        const newAccion = {
            accion,
            estado: true,
            id_bitacora: bitacoraCreated.id
        };
        const accionSave = new accion_1.default(newAccion);
        yield accionSave.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.saveBitacora = saveBitacora;
const getUserIdByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY || '');
    const { uid } = decodedToken;
    const user = yield usuario_1.default.findByPk(uid);
    return user === null || user === void 0 ? void 0 : user.id;
});
const gets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const script = " SELECT * FROM bitacora INNER JOIN usuario ON bitacora.id_usuario = usuario.id INNER JOIN accion ON bitacora.id = accion.id_bitacora";
    const obj = yield ((_a = bitacora_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(script));
    const data = obj === null || obj === void 0 ? void 0 : obj[0];
    res.json({ data });
});
exports.gets = gets;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield bitacora_1.default.findByPk(id);
    if (obj) {
        res.json({ obj });
    }
    else {
        res.status(404).json({
            msg: `No existe una Bitacora con el id : ${id}`
        });
    }
});
exports.get = get;
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const obj = new bitacora_1.default(body);
        yield obj.save();
        res.json({
            msg: 'La Bitacora se creo correctamente',
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
        const obj = yield bitacora_1.default.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen una Bitacora con ese ID`,
            });
        }
        yield obj.update(body);
        res.json({
            msg: `La Bitacora con el id ${id} fue actualizado correctamente`,
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
    const obj = yield bitacora_1.default.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe una Bitacora con el id: ' + id
        });
    }
    yield obj.destroy();
    res.json({
        msg: `La Bitacora con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
});
exports.delet = delet;
const deletState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const obj = yield bitacora_1.default.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe la Bitacora con el id : ' + id
        });
    }
    yield obj.update({ estado: false });
    res.json({
        msg: `La Bitacora con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
});
exports.deletState = deletState;
//# sourceMappingURL=bitacora.js.map