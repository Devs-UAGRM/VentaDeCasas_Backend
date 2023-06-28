"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const bitacora_1 = __importDefault(require("./bitacora"));
class Accion extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Accion.belongsTo(bitacora_1.default, { foreignKey: "id_bitacora" });
    }
}
Accion.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    accion: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    id_bitacora: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: bitacora_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "Accion",
    tableName: "accion",
});
exports.default = Accion;
//# sourceMappingURL=accion.js.map