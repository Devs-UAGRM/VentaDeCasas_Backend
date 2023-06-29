import { Router } from "express";
import { 
    deleteAccion,
    deleteAccionState,
    getAccion,
    getAccions,
    postAccion,
    putAccion
 } from "../../controllers/mod_user/accion";
import validarJWT from "../../middlewares/validar-jwt";
import { isAdminRole } from "../../middlewares/validar-rol";
import validarCampos from "../../middlewares/validar-campos";
import { check } from "express-validator";

 const router = Router();

 router.get('/',[
    validarJWT,
    isAdminRole,
   validarCampos    
], getAccions);

 router.get('/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    validarJWT,
    isAdminRole,
   validarCampos    
], getAccion);
 
 router.post('/',[
    validarJWT,
    isAdminRole,
    check('id_bitacora', 'El rol es obligatorio').not().isEmpty(),
    check('accion', 'La descripcion es obligatoria').not().isEmpty(),
    validarCampos    
], postAccion);
 
 router.put('/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    validarJWT,
    isAdminRole,
    validarCampos    
], putAccion);
 
 router.delete('/del/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
     validarJWT,
    isAdminRole,
    validarCampos    
], deleteAccion);
 
 router.delete('/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
     validarJWT,
    isAdminRole,
    validarCampos    
], deleteAccionState);

 export default router;
