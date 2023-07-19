import { Router } from "express";
import {
  deleteCategoria,
  deleteCategoriaState,
  getCategoria,
  getCategorias,
  postCategoria,
  putCategoria
} from "../../controllers/mod_casas/categoria";
import validarJWT from "../../middlewares/validar-jwt";
import { isAdminRole } from "../../middlewares/validar-rol";
import validarCampos from "../../middlewares/validar-campos";
import { check } from "express-validator";

const router = Router();

router.get('/', [
  validarJWT,
  // isAdminRole,
  validarCampos
], getCategorias);

router.get('/:id', [
  check('id').isInt().withMessage('El campo id debe ser un número entero'),
  validarJWT,
  // isAdminRole,
  validarCampos
], getCategoria);

router.post('/', [
  validarJWT,
  // isAdminRole,
  check('categoria', 'La categoria es obligatorio').not().isEmpty(),
  check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
  validarCampos
], postCategoria);

router.put('/:id', [
  check('id').isInt().withMessage('El campo id debe ser un número entero'),
  validarJWT,
  // isAdminRole,
  validarCampos
], putCategoria);

router.delete('/del/:id', [
  check('id').isInt().withMessage('El campo id debe ser un número entero'),
  validarJWT,
  isAdminRole,
  validarCampos
], deleteCategoria);

router.delete('/:id', [
  check('id').isInt().withMessage('El campo id debe ser un número entero'),
  validarJWT,
  isAdminRole,
  validarCampos
], deleteCategoriaState);

export default router;
