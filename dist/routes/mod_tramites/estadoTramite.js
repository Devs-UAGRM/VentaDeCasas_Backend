"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoTramite_1 = require("../../controllers/mod_tramite/estadoTramite");
const router = (0, express_1.Router)();
router.get('/', estadoTramite_1.gets);
router.get('/:id', estadoTramite_1.get);
router.post('/', estadoTramite_1.post);
router.put('/:id', estadoTramite_1.put);
router.delete('/del/:id', estadoTramite_1.delet);
router.delete('/:id', estadoTramite_1.deletState);
exports.default = router;
//# sourceMappingURL=estadoTramite.js.map