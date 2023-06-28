"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalltram_1 = require("../../controllers/mod_tramite/detalltram");
const router = (0, express_1.Router)();
router.get('/', detalltram_1.gets);
router.get('/:id', detalltram_1.get);
router.post('/', detalltram_1.post);
router.put('/:id', detalltram_1.put);
router.delete('/del/:id', detalltram_1.delet);
router.delete('/:id', detalltram_1.deletState);
exports.default = router;
//# sourceMappingURL=detalltram.js.map