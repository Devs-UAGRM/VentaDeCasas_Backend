"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fechtram_1 = require("../../controllers/mod_tramite/fechtram");
const router = (0, express_1.Router)();
router.get('/', fechtram_1.gets);
router.get('/:id', fechtram_1.get);
router.post('/', fechtram_1.post);
router.put('/:id', fechtram_1.put);
router.delete('/del/:id', fechtram_1.delet);
router.delete('/:id', fechtram_1.deletState);
exports.default = router;
//# sourceMappingURL=fechtram.js.map