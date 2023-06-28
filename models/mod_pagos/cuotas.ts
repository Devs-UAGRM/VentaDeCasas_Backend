import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import CompVent from "./compvent";

class Cuota extends Model {
  public id!: number;
  public cuota_total!: number;
  public cuota_pagada!: number;
  public por_pagar!: number;
  public pagado!: number;
  public estado!: boolean;
  public id_compvent!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Cuota.belongsTo(CompVent, { foreignKey: "id_compvent" });
  }
}

Cuota.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cuota_total: {
      type: DataTypes.INTEGER,
    },
    cuota_pagada: {
      type: DataTypes.INTEGER,
    },
    por_pagar: {
      type: DataTypes.DOUBLE,
    },
    pagado: {
      type: DataTypes.DOUBLE,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_compvent: {
      type: DataTypes.INTEGER,
      references: {
        model: CompVent,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Cuota",
    tableName: "cuota",
  }
);

export default Cuota;

