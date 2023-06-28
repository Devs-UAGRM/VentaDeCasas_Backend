"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bitacora_1 = require("../../controllers/mod_user/bitacora");
const router = (0, express_1.Router)();
router.get('/', bitacora_1.gets);
router.get('/:id', bitacora_1.get);
router.post('/', bitacora_1.post);
router.put('/:id', bitacora_1.put);
router.delete('/del/:id', bitacora_1.delet);
router.delete('/:id', bitacora_1.deletState);
exports.default = router;
//# sourceMappingURL=bitacora.js.map