"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const tramite_1 = __importDefault(require("./tramite"));
const compvent_1 = __importDefault(require("../mod_pagos/compvent"));
class DetallTram extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        DetallTram.belongsTo(tramite_1.default, { foreignKey: "id_tramite" });
        DetallTram.belongsTo(compvent_1.default, { foreignKey: "id_compvent" });
    }
}
DetallTram.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_tramite: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: tramite_1.default,
            key: "id",
        },
    },
    id_compvent: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: compvent_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "DetallTram",
    tableName: "detalle_tramite",
});
exports.default = DetallTram;
//# sourceMappingURL=detalltram.js.map