import { Router } from "express";
import { 
    deleteAccion,
    deleteAccionState,
    getAccion,
    getAccions,
    postAccion,
    putAccion
 } from "../../controllers/mod_user/accion";

 const router = Router();

 router.get('/', getAccions);
 router.get('/:id', getAccion);
 router.post('/', postAccion);
 router.put('/:id', putAccion);
 router.delete('/del/:id', deleteAccion);
 router.delete('/:id', deleteAccionState);

 export default router;
