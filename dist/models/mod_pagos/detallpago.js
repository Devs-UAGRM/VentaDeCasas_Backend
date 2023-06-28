"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connnection_1 = __importDefault(require("../../db/connnection"));
const usuario_1 = __importDefault(require("../mod_user/usuario"));
const compvent_1 = __importDefault(require("./compvent"));
const tarjeta_1 = __importDefault(require("./tarjeta"));
const cuotas_1 = __importDefault(require("./cuotas"));
class DetallPago extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        DetallPago.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
        DetallPago.belongsTo(compvent_1.default, { foreignKey: 'id_compvent' });
        DetallPago.belongsTo(tarjeta_1.default, { foreignKey: 'id_tarjeta' });
        DetallPago.belongsTo(cuotas_1.default, { foreignKey: 'id_cuota' });
    }
}
DetallPago.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    pago: {
        type: sequelize_1.DataTypes.NUMBER,
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
    id_compvent: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: compvent_1.default,
            key: 'id',
        },
    },
    id_tarjeta: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: tarjeta_1.default,
            key: 'id',
        },
    },
    id_cuota: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: cuotas_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: connnection_1.default,
    modelName: "DetallPago",
    tableName: "detalle_pago",
});
exports.default = DetallPago;
//# sourceMappingURL=detallpago.js.map