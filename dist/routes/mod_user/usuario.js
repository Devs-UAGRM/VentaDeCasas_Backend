"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../../controllers/mod_user/usuario");
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../../middlewares/validar-jwt"));
const validar_rol_1 = require("../../middlewares/validar-rol");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.gets);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isUserForID),
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.get);
router.post('/', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    (0, express_validator_1.check)('correo').custom(db_validators_1.isEmailExist),
    validar_campos_1.default
], usuario_1.post);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], usuario_1.put);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], usuario_1.delet);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], usuario_1.deletState);
exports.default = router;
//# sourceMappingURL=usuario.js.map