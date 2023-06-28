import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Usuario from "../mod_user/usuario";

class Targeta extends Model {
    public id!: number;
    public nomb_titular!: string;
    public numero!: number;
    public fecha_v!: Date;
    public csv!: string;
    public estado!: boolean;
    public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    Targeta.belongsTo(Usuario, { foreignKey: 'id_usuario' });
  }
}

Targeta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nomb_titular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        fecha_v: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        csv: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuario,
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: "Tarjeta",
        tableName: "tarjeta",
    }
  );
  
  export default Targeta;

