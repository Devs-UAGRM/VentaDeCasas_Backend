
import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";

class Rol extends Model {
    
    public id!: number;
    public rol!: string;
    public descripcion!: string;
    public estado!: boolean;

    // Otras propiedades del modelo

}

Rol.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
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
        modelName: "Rol",
        tableName: "rol",
    }
);

export default Rol;