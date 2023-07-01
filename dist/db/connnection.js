"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = encodeURIComponent(process.env.DB_USER || "postgres");
const password = encodeURIComponent(process.env.DB_PASSWORD || "password");
const host = encodeURIComponent(process.env.DB_HOST || "localhost");
const port = encodeURIComponent(process.env.DB_PORT || "8000");
const database = encodeURIComponent(process.env.DB_DATABASE || "houseSales");
const typeDatabase = "postgres";
const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;
const options = {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
const sequelizeConnection = new sequelize_1.Sequelize(url, options);
exports.default = sequelizeConnection;
//     PARA EL LOCALHOST
// const db = new Sequelize('houseSales', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: "postgres",
// })
// export default db;
//# sourceMappingURL=connnection.js.map