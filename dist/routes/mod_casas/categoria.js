"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_1 = require("../../controllers/mod_casas/categoria");
const validar_jwt_1 = __importDefault(require("../../middlewares/validar-jwt"));
const validar_rol_1 = require("../../middlewares/validar-rol");
const validar_campos_1 = __importDefault(require("../../middlewares/validar-campos"));
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], categoria_1.getCategorias);
router.get('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], categoria_1.getCategoria);
router.post('/', [
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    (0, express_validator_1.check)('categoria', 'La categoria es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    validar_campos_1.default
], categoria_1.postCategoria);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], categoria_1.putCategoria);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], categoria_1.deleteCategoria);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt().withMessage('El campo id debe ser un número entero'),
    validar_jwt_1.default,
    validar_rol_1.isAdminRole,
    validar_campos_1.default
], categoria_1.deleteCategoriaState);
exports.default = router;
//# sourceMappingURL=categoria.js.map