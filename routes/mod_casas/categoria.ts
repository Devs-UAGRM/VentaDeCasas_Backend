import { Router } from "express";
import { 
    deleteCategoria,
   deleteCategoriaState,
   getCategoria,
   getCategorias,
   postCategoria,
   putCategoria
 } from "../../controllers/mod_casas/categoria";

 const router = Router();

 router.get('/', getCategorias);
 router.get('/:id', getCategoria);
 router.post('/', postCategoria);
 router.put('/:id', putCategoria);
 router.delete('/del/:id', deleteCategoria);
 router.delete('/:id', deleteCategoriaState);

 export default router;
