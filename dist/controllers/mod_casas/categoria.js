"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoriaState = exports.deleteCategoria = exports.putCategoria = exports.postCategoria = exports.getCategoria = exports.getCategorias = void 0;
const categoria_1 = __importDefault(require("../../models/mod_casas/categoria"));
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield categoria_1.default.findAll();
    res.json({ categoria });
});
exports.getCategorias = getCategorias;
const getCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categoria_1.default.findByPk(id);
    if (categoria) {
        res.json({ categoria });
    }
    else {
        res.status(404).json({
            msg: `No existe una categoria con el id : ${id}`
        });
    }
});
exports.getCategoria = getCategoria;
const postCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const categoria = new categoria_1.default(body);
        yield categoria.save();
        res.json({
            msg: 'La categoria se creo correctamente',
            categoria
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postCategoria = postCategoria;
const putCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const categoria = yield categoria_1.default.findByPk(id);
        if (!categoria) {
            return res.status(404).json({
                mensaje: `No existen la categoria con ese ID`,
            });
        }
        yield categoria.update(body);
        res.json({
            msg: `La categoria con el id ${id} fue actualizado correctamente`,
            categoria
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCategoria = putCategoria;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categoria_1.default.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg: 'No existe la categoria con el id: ' + id
        });
    }
    yield categoria.destroy();
    res.json({
        msg: `La categoria con el id ${id} fue eliminado permanentemente con exito..!!!`,
        categoria
    });
});
exports.deleteCategoria = deleteCategoria;
const deleteCategoriaState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categoria_1.default.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg: 'No existe la categoria con el id : ' + id
        });
    }
    yield categoria.update({ estado: false });
    res.json({
        msg: `La categoria con el id ${id} fue eliminado con exito..!!!`,
        categoria
    });
});
exports.deleteCategoriaState = deleteCategoriaState;
//# sourceMappingURL=categoria.js.map