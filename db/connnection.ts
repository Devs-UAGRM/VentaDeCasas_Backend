import { Options, Sequelize } from "sequelize";

const user = encodeURIComponent(process.env.DB_USER || "postgres");
const password = encodeURIComponent(process.env.DB_PASSWORD || "password");
const host = encodeURIComponent(process.env.DB_HOST || "localhost");
const port = encodeURIComponent(process.env.DB_PORT || "8000");
const database = encodeURIComponent(process.env.DB_DATABASE || "houseSales");
const typeDatabase = "postgres";

const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;

const options: Options = {
  dialect: "postgres", // 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql'
  logging: false, // false
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

const sequelizeConnection = new Sequelize(url, options);
export default sequelizeConnection;

//     PARA EL LOCALHOST
// const db = new Sequelize('houseSales', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: "postgres",
// })

// export default db;
