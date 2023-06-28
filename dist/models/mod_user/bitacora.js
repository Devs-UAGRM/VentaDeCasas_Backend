"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const usuario_1 = __importDefault(require("./usuario"));
class Bitacora extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Bitacora.belongsTo(usuario_1.default, { foreignKey: "id_usuario" });
    }
}
Bitacora.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hora_ini: {
        type: sequelize_1.DataTypes.STRING,
    },
    hora_fin: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "Bitacora",
    tableName: "bitacora",
});
exports.default = Bitacora;
//# sourceMappingURL=bitacora.js.map