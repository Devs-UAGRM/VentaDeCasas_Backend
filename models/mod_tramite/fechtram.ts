import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import DetallTam from "../mod_tramite/detalltram";
import EstaTram from "../mod_tramite/estadoTramite";

class FechaTram extends Model {
    public id!: number;
    public fecha!: Date;
    public estado!: boolean;
    public id_detalltram!: number; // Llave foránea
    public id_estatram!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    FechaTram.belongsTo(DetallTam, { foreignKey: 'id_detalltram' });
    FechaTram.belongsTo(EstaTram, { foreignKey: 'id_estatram' });
  }
}

FechaTram.init(
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
        estado : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        id_detalltram: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: DetallTam,
                key: 'id',
            },
        },
        id_estatram: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: EstaTram,
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: "FechaTram",
        tableName: "fecha_estado",
    }
  );
  
  export default FechaTram;

