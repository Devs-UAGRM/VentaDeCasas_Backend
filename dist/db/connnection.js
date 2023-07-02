"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = 'pubttwrcsdxvgl';
const password = '1b9a3379ca07066c24e47e27be4916ca2cdfbd9083f96c4c8a47dc94b082c4ac';
const host = 'ec2-34-197-91-131.compute-1.amazonaws.com';
const port = 5432;
const database = 'd2pprl600mfs20';
const typeDatabase = 'postgres';
const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;
console.log(url);
const options = {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
};
const sequelizeConnection = new sequelize_1.Sequelize(url, options);
exports.default = sequelizeConnection;
//# sourceMappingURL=connnection.js.map