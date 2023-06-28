import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Usuario from "./usuario";

class Bitacora extends Model {
  public id!: number;
  public hora_ini!: string;
  public hora_fin!: string;
  public estado!: boolean;
  public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Bitacora.belongsTo(Usuario, { foreignKey: "id_usuario" });
  }
}

Bitacora.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hora_ini: {
      type: DataTypes.STRING,
    },
    hora_fin: {
      type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Bitacora",
    tableName: "bitacora",
  }
);

export default Bitacora;

