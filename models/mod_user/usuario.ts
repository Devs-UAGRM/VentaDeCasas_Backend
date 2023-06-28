import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Rol from "./rol";

class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public correo!: string;
  public password!: string;
  public celular!: number;
  public img!: string;
  public google!: boolean;
  public estado!: boolean;
  public id_rol!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Usuario.belongsTo(Rol, { foreignKey: "id_rol" });
  }
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
      },
    celular: {
        type: DataTypes.NUMBER,
    },
    google: {
        type: DataTypes.BOOLEAN,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      references: {
        model: Rol,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Usuario",
    tableName: "usuario",
  }
);

export default Usuario;

