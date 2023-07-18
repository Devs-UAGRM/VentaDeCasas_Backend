import { Router } from "express";
import {
   get,
   gets,
   post,
   put,
   delet,
   deletState
} from "../../controllers/mod_user/bitacora";
import validarJWT from "../../middlewares/validar-jwt";
import { isAdminRole } from "../../middlewares/validar-rol";
import validarCampos from "../../middlewares/validar-campos";
import { check } from "express-validator";

const router = Router();

router.get('/', [
   validarJWT,
   isAdminRole,
   validarCampos
], gets);


router.get('/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   isAdminRole,
   validarCampos
], get);

router.post('/', [
   validarJWT,
   isAdminRole,
   check('hora_ini', 'La hora_ini es obligatorio').not().isEmpty(),
   check('hora_fin', 'La hora_fin es obligatorio').not().isEmpty(),
   validarCampos
], post);

router.put('/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   isAdminRole,
   validarCampos
], put);

router.delete('/del/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   isAdminRole,
   validarCampos
], delet);

router.delete('/:id', [
   check('id').isInt().withMessage('El campo id debe ser un número entero'),
   validarJWT,
   isAdminRole,
   validarCampos
], deletState);

export default router;
