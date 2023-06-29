import { Router } from "express";
import { 
    get,
    gets,
    post,
    put,
    delet,
    deletState
 } from "../../controllers/mod_pagos/cuotas";
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
    check('cuota_total', 'La cuota_total es obligatorio').not().isEmpty(),
    check('cuota_pagada', 'La cuota_pagada es obligatorio').not().isEmpty(),
    check('por_pagar', 'por_pagar es obligatorio').not().isEmpty(),
    check('pagado', 'pagado es obligatorio').not().isEmpty(),
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
