"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const compvent_1 = __importDefault(require("./compvent"));
class Cuota extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Cuota.belongsTo(compvent_1.default, { foreignKey: "id_compvent" });
    }
}
Cuota.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cuota_total: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    cuota_pagada: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    por_pagar: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    pagado: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
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
    modelName: "Cuota",
    tableName: "cuota",
});
exports.default = Cuota;
//# sourceMappingURL=cuotas.js.map