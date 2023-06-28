"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjeta_1 = require("../../controllers/mod_pagos/tarjeta");
const router = (0, express_1.Router)();
router.get('/', tarjeta_1.gets);
router.get('/:id', tarjeta_1.get);
router.post('/', tarjeta_1.post);
router.put('/:id', tarjeta_1.put);
router.delete('/del/:id', tarjeta_1.delet);
router.delete('/:id', tarjeta_1.deletState);
exports.default = router;
//# sourceMappingURL=tarjeta.js.map