import { DataTypes, Model } from "sequelize";
import db from "../../db/connnection";
import Usuario from "../mod_user/usuario";
import Categoria from "../mod_casas/categoria";

class Propiedad extends Model {
    public id!: number;
    public titulo!: string;
    public descripcion!: string;
    public lat!: number;
    public lon!: number;
    public estado!: boolean;
    public id_usuario!: number; // Llave foránea
    public id_categoria!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    Propiedad.belongsTo(Usuario, { foreignKey: 'id_usuario' });
    Propiedad.belongsTo(Categoria, { foreignKey: 'id_categoria' });
  }
}

Propiedad.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lat: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        lon: {
            type: DataTypes.DOUBLE,
            allowNull: true,
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
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Categoria,
                key: 'id',
            },
        },
    },
    {
        sequelize: db,
        modelName: "Propiedad",
        tableName: "propiedad",
    }
  );
  
  export default Propiedad;

