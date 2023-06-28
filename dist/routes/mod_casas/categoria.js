"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_1 = require("../../controllers/mod_casas/categoria");
const router = (0, express_1.Router)();
router.get('/', categoria_1.getCategorias);
router.get('/:id', categoria_1.getCategoria);
router.post('/', categoria_1.postCategoria);
router.put('/:id', categoria_1.putCategoria);
router.delete('/del/:id', categoria_1.deleteCategoria);
router.delete('/:id', categoria_1.deleteCategoriaState);
exports.default = router;
//# sourceMappingURL=categoria.js.map