
import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";

class Categoria extends Model {
    
    public id!: number;
    public categoria!: string;
    public descripcion!: string;
    public estado!: boolean;

    // Otras propiedades del modelo

}

Categoria.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: {
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
        modelName: "Categoria",
        tableName: "categoria",
    }
);

export default Categoria;