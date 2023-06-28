import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Tramite from "./tramite";
import CompVent from "../mod_pagos/compvent";

class DetallTram extends Model {
  public id!: number;
  public estado!: boolean;
  public id_tramite!: number; // Llave foránea
  public id_compvent!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    DetallTram.belongsTo(Tramite, { foreignKey: "id_tramite" });
    DetallTram.belongsTo(CompVent, { foreignKey: "id_compvent" });
  }
}

DetallTram.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_tramite: {
      type: DataTypes.INTEGER,
      references: {
        model: Tramite,
        key: "id",
      },
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
    modelName: "DetallTram",
    tableName: "detalle_tramite",
  }
);

export default DetallTram;

