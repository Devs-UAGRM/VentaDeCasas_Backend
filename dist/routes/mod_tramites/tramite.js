"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tramite_1 = require("../../controllers/mod_tramite/tramite");
const router = (0, express_1.Router)();
router.get('/', tramite_1.gets);
router.get('/:id', tramite_1.get);
router.post('/', tramite_1.post);
router.put('/:id', tramite_1.put);
router.delete('/del/:id', tramite_1.delet);
router.delete('/:id', tramite_1.deletState);
exports.default = router;
//# sourceMappingURL=tramite.js.map