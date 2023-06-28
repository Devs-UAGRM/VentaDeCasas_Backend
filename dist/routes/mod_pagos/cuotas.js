"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuotas_1 = require("../../controllers/mod_pagos/cuotas");
const router = (0, express_1.Router)();
router.get('/', cuotas_1.gets);
router.get('/:id', cuotas_1.get);
router.post('/', cuotas_1.post);
router.put('/:id', cuotas_1.put);
router.delete('/del/:id', cuotas_1.delet);
router.delete('/:id', cuotas_1.deletState);
exports.default = router;
//# sourceMappingURL=cuotas.js.map