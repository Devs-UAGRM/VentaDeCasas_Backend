"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_1 = require("../../controllers/mod_user/rol");
const router = (0, express_1.Router)();
router.get('/', rol_1.gets);
router.get('/:id', rol_1.get);
router.post('/', rol_1.post);
router.put('/:id', rol_1.put);
router.delete('/del/:id', rol_1.delet);
router.delete('/:id', rol_1.deletState);
exports.default = router;
//# sourceMappingURL=rol.js.map