"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accion_1 = require("../../controllers/mod_user/accion");
const router = (0, express_1.Router)();
router.get('/', accion_1.getAccions);
router.get('/:id', accion_1.getAccion);
router.post('/', accion_1.postAccion);
router.put('/:id', accion_1.putAccion);
router.delete('/del/:id', accion_1.deleteAccion);
router.delete('/:id', accion_1.deleteAccionState);
exports.default = router;
//# sourceMappingURL=accion.js.map