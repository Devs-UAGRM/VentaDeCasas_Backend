"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propiedad_1 = require("../../controllers/mod_casas/propiedad");
const router = (0, express_1.Router)();
router.get('/', propiedad_1.gets);
router.get('/:id', propiedad_1.get);
router.post('/', propiedad_1.post);
router.put('/:id', propiedad_1.put);
router.delete('/del/:id', propiedad_1.delet);
router.delete('/:id', propiedad_1.deletState);
exports.default = router;
//# sourceMappingURL=propiedad.js.map