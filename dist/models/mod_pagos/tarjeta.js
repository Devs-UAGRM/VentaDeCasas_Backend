"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const usuario_1 = __importDefault(require("../mod_user/usuario"));
class Targeta extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Targeta.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
    }
}
Targeta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nomb_titular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    fecha_v: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    csv: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "Tarjeta",
    tableName: "tarjeta",
});
exports.default = Targeta;
//# sourceMappingURL=tarjeta.js.map