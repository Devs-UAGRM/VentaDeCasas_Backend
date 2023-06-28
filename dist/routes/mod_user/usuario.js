"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../../controllers/mod_user/usuario");
const router = (0, express_1.Router)();
router.get('/', usuario_1.gets);
router.get('/:id', usuario_1.get);
router.post('/', usuario_1.post);
router.put('/:id', usuario_1.put);
router.delete('/del/:id', usuario_1.delet);
router.delete('/:id', usuario_1.deletState);
exports.default = router;
//# sourceMappingURL=usuario.js.map