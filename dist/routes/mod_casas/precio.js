"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const precio_1 = require("../../controllers/mod_casas/precio");
const router = (0, express_1.Router)();
router.get('/', precio_1.gets);
router.get('/:id', precio_1.get);
router.post('/', precio_1.post);
router.put('/:id', precio_1.put);
router.delete('/del/:id', precio_1.delet);
router.delete('/:id', precio_1.deletState);
exports.default = router;
//# sourceMappingURL=precio.js.map