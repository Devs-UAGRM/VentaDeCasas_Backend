import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Propiedad from "../mod_casas/propiedad";

class CompVent extends Model {
    public id!: number;
    public estado_pago!: string;
    public fecha_ini!: Date;
    public fecha_fin!: Date;
    public costo!: number;
    public estado!: boolean;
    public id_propiedad!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    CompVent.belongsTo(Propiedad, { foreignKey: 'id_propiedad' });
  }
}

CompVent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        estado_pago: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_ini: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        costo: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        estado : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        id_propiedad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Propiedad,
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: "CompVent",
        tableName: "compra_venta",
    }
  );
  
  export default CompVent;

