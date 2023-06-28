"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const detalltram_1 = __importDefault(require("../mod_tramite/detalltram"));
const estadoTramite_1 = __importDefault(require("../mod_tramite/estadoTramite"));
class FechaTram extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        FechaTram.belongsTo(detalltram_1.default, { foreignKey: 'id_detalltram' });
        FechaTram.belongsTo(estadoTramite_1.default, { foreignKey: 'id_estatram' });
    }
}
FechaTram.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    id_detalltram: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: detalltram_1.default,
            key: 'id',
        },
    },
    id_estatram: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: estadoTramite_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "FechaTram",
    tableName: "fecha_estado",
});
exports.default = FechaTram;
//# sourceMappingURL=fechtram.js.map