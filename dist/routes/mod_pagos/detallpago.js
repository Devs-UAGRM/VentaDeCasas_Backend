"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallpago_1 = require("../../controllers/mod_pagos/detallpago");
const router = (0, express_1.Router)();
router.get('/', detallpago_1.gets);
router.get('/:id', detallpago_1.get);
router.post('/', detallpago_1.post);
router.put('/:id', detallpago_1.put);
router.delete('/del/:id', detallpago_1.delet);
router.delete('/:id', detallpago_1.deletState);
exports.default = router;
//# sourceMappingURL=detallpago.js.map