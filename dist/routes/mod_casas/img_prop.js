"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_prop_1 = require("../../controllers/mod_casas/img_prop");
const router = (0, express_1.Router)();
router.get('/', img_prop_1.gets);
router.get('/:id', img_prop_1.get);
router.post('/', img_prop_1.post);
router.put('/:id', img_prop_1.put);
router.delete('/del/:id', img_prop_1.delet);
router.delete('/:id', img_prop_1.deletState);
exports.default = router;
//# sourceMappingURL=img_prop.js.map