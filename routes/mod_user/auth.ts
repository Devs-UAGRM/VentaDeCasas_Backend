import { Router } from 'express';
import { check } from 'express-validator';

import validarCampos from '../../middlewares/validar-campos';
import { login } from '../../controllers/mod_user/auth';

const router = Router();

router.post('/login', [
    validarCampos,
  check('correo', 'El correo es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
],login );

export default router;
