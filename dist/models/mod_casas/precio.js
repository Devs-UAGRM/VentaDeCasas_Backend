"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const propiedad_1 = __importDefault(require("./propiedad"));
class Precio extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Precio.belongsTo(propiedad_1.default, { foreignKey: "id_propiedad" });
    }
}
Precio.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    precio: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_propiedad: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: propiedad_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "Precio",
    tableName: "precio",
});
exports.default = Precio;
//# sourceMappingURL=precio.js.map