import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Propiedad from "./propiedad";

class Precio extends Model {
  public id!: number;
  public precio!: string;
  public estado!: boolean;
  public id_propiedad!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Precio.belongsTo(Propiedad, { foreignKey: "id_propiedad" });
  }
}

Precio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    precio: {
      type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_propiedad: {
      type: DataTypes.INTEGER,
      references: {
        model: Propiedad,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Precio",
    tableName: "precio",
  }
);

export default Precio;

