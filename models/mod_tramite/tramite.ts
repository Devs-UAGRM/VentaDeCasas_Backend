
import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";

class Tramite extends Model {
    
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
    public lugar_lat!: number;
    public lugar_lon!: number;
    public estado!: boolean;

    // Otras propiedades del modelo

}

Tramite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING,
        },
        descripcion : {
            type:DataTypes.TEXT
        },
        lugar_lat : {
            type:DataTypes.DOUBLE
        },
        lugar_lon : {
            type:DataTypes.DOUBLE
        },
        estado : {
            type:DataTypes.BOOLEAN
        }
    },
    {
        sequelize: db,
        modelName: "Tramite",
        tableName: "tramite",
    }
);

export default Tramite;