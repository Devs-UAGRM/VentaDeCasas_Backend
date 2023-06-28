import { Router } from "express";
import { 
    get,
    gets,
    post,
    put,
    delet,
    deletState
 } from "../../controllers/mod_casas/img_prop";

 const router = Router();

 router.get('/', gets);
 router.get('/:id', get);
 router.post('/', post);
 router.put('/:id', put);
 router.delete('/del/:id', delet);
 router.delete('/:id', deletState);

 export default router;
