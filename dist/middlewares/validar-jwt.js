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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = __importDefault(require("../models/mod_user/usuario"));
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log({req})
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
        });
    }
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY || '');
        if (!decodedToken) {
            throw new Error();
        }
        // decodificar token para obtener el id == uid
        const { uid } = decodedToken;
        // Leer el usuario que corresponde al uid
        const user = yield usuario_1.default.findByPk(uid);
        if (!user) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe en la DB',
            });
        }
        // Verificar si el uid tiene estado true
        if (!user.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false',
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido',
        });
    }
});
exports.default = validarJWT;
//# sourceMappingURL=validar-jwt.js.map