import { Router } from "express";
import {
   get,
   gets,
   post,
   put,
   delet,
   deletState
} from "../../controllers/mod_casas/propiedad";
import validarJWT from "../../middlewares/validar-jwt";
import validarCampos from "../../middlewares/validar-campos";
import { check } from "express-validator";
import { isAdminRole } from "../../middlewares/validar-rol";

const router = Router();

router.get('/', [
   validarJWT,
   validarCampos
], gets);

router.get('/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   validarCampos
], get);

router.post('/', [
   validarJWT,
   //  isAdminRole,
   check('titulo', 'El titulo es obligatorio').not().isEmpty(),
   check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
   check('lat', 'lat es obligatorio').not().isEmpty(),
   check('lon', 'lon es obligatorio').not().isEmpty(),
   validarCampos
], post);

router.put('/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   //   isAdminRole,
   validarCampos
], put);

router.delete('/del/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   //  isAdminRole,
   validarCampos
], delet);

router.delete('/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   validarCampos
], deletState);

export default router;
