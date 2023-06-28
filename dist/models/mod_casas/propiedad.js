"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const usuario_1 = __importDefault(require("../mod_user/usuario"));
const categoria_1 = __importDefault(require("../mod_casas/categoria"));
class Propiedad extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Propiedad.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
        Propiedad.belongsTo(categoria_1.default, { foreignKey: 'id_categoria' });
    }
}
Propiedad.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lat: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true,
    },
    lon: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true,
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
    id_categoria: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: categoria_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "Propiedad",
    tableName: "propiedad",
});
exports.default = Propiedad;
//# sourceMappingURL=propiedad.js.map