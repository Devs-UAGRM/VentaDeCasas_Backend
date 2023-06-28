"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compvent_1 = require("../../controllers/mod_pagos/compvent");
const router = (0, express_1.Router)();
router.get('/', compvent_1.gets);
router.get('/:id', compvent_1.get);
router.post('/', compvent_1.post);
router.put('/:id', compvent_1.put);
router.delete('/del/:id', compvent_1.delet);
router.delete('/:id', compvent_1.deletState);
exports.default = router;
//# sourceMappingURL=compvent.js.map