import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Usuario from "../mod_user/usuario";
import CompVent from "./compvent";
import Tarjeta from "./tarjeta";
import Cuota from "./cuotas";

class DetallPago extends Model {
    public id!: number;
    public fecha!: Date;
    public pago!: number;
    public estado!: boolean;
    public id_usuario!: number; // Llave foránea
    public id_compvent!: number; // Llave foránea
    public id_tarjeta!: number; // Llave foránea
    public id_cuota!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    DetallPago.belongsTo(Usuario, { foreignKey: 'id_usuario' });
    DetallPago.belongsTo(CompVent, { foreignKey: 'id_compvent' });
    DetallPago.belongsTo(Tarjeta, { foreignKey: 'id_tarjeta' });
    DetallPago.belongsTo(Cuota, { foreignKey: 'id_cuota' });
  }
}

DetallPago.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        pago: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        estado : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuario,
                key: 'id',
            },
        },
        id_compvent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: CompVent,
                key: 'id',
            },
        },
        id_tarjeta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Tarjeta,
                key: 'id',
            },
        },
        id_cuota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Cuota,
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: "DetallPago",
        tableName: "detalle_pago",
    }
  );
  
  export default DetallPago;

