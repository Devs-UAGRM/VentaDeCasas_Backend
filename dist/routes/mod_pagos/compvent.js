"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compvent_1 = require("../../controllers/mod_pagos/compvent");
const validar_jwt_1 = __importDefault(require("../../middlewares/validar-jwt"));
const validar_campos_1 = __importDefault(require("../../middlewares/validar-campos"));
const express_validator_1 = require("express-validator");
const validar_rol_1 = require("../../middlewares/validar-rol");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_campos_1.default
], compvent_1.gets);
router.get('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], compvent_1.get);
router.post('/', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('estado_pago', 'El estado_pago es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('fecha_ini', 'La fecha_ini es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('fecha_fin', 'La fecha_fin es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('costo', 'El costo es obligatorio').not().isEmpty(),
    validar_campos_1.default
], compvent_1.post);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], compvent_1.put);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], compvent_1.delet);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_campos_1.default
], compvent_1.deletState);
exports.default = router;
//# sourceMappingURL=compvent.js.map