
import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Bitacora from "./bitacora";

class Accion extends Model {
    
    public id!: number;
    public accion!: string;
    public estado!: boolean;
    public id_bitacora!: number; // Llave foránea

    // Otras propiedades del modelo...
  
    // Definición de las asociaciones
    public static associate() {
        Accion.belongsTo(Bitacora, { foreignKey: "id_bitacora" });
    }
}

Accion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        accion: {
          type: DataTypes.STRING,
        },
        estado : {
            type:DataTypes.BOOLEAN
        },
        id_bitacora: {
            type: DataTypes.INTEGER,
            references: {
              model: Bitacora,
              key: "id",
            },
        },
    },
    {
        sequelize: db,
        modelName: "Accion",
        tableName: "accion",
    }
);

export default Accion;