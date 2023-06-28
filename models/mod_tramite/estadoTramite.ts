
import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";

class EstadoTramite extends Model {
    
    public id!: number;
    public estado_t!: string;
    public descripcion!: string;
    public estado!: boolean;

    // Otras propiedades del modelo

}

EstadoTramite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado_t: {
          type: DataTypes.STRING,
        },
        descripcion : {
            type:DataTypes.TEXT
        },
        estado : {
            type:DataTypes.BOOLEAN
        }
    },
    {
        sequelize: db,
        modelName: "EstadoTramite",
        tableName: "estado_tramite",
    }
);

export default EstadoTramite;