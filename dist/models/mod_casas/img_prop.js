"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const propiedad_1 = __importDefault(require("../mod_casas/propiedad"));
class imgProp extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        imgProp.belongsTo(propiedad_1.default, { foreignKey: 'id_propiedad' });
    }
}
imgProp.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    id_propiedad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: propiedad_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "imgProp",
    tableName: "img_propiedad",
});
exports.default = imgProp;
//# sourceMappingURL=img_prop.js.map