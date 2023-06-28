import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Propiedad from "../mod_casas/propiedad";

class imgProp extends Model {
    public id!: number;
    public img!: string;
    public descripcion!: string;
    public estado!: boolean;
    public id_propiedad!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    imgProp.belongsTo(Propiedad, { foreignKey: 'id_propiedad' });
  }
}

imgProp.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        id_propiedad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Propiedad,
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: "imgProp",
        tableName: "img_propiedad",
    }
  );
  
  export default imgProp;

