import { Router } from "express";
import { 
    get,
    gets,
    post,
    put,
    delet,
    deletState
 } from "../../controllers/mod_tramite/detalltram";
import { check } from "express-validator";
import validarJWT from "../../middlewares/validar-jwt";
import validarCampos from "../../middlewares/validar-campos";
import { isAdminRole } from "../../middlewares/validar-rol";

 const router = Router();

 router.get('/',[
    validarJWT,
    validarCampos    
], gets);

 router.get('/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    validarJWT,
   validarCampos    
], get);
 
 router.post('/',[
    validarJWT,
    validarCampos    
], post);
 
 router.put('/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
     validarJWT,
    validarCampos    
], put);
 
 router.delete('/del/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    validarJWT,
    isAdminRole,
    validarCampos  
], delet);
 
 router.delete('/:id',[
    check('id').isInt().withMessage('El campo id debe ser un número entero'),
    validarJWT,
    validarCampos  
], deletState);

 export default router;
