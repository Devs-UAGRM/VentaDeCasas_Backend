"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = 'jwyjpayxggfxea';
const password = 'e2915dc6f998be73d3a1c40b7a4857a2a556162504017ad26c2881b819b4e0d1';
const host = 'ec2-3-218-172-130.compute-1.amazonaws.com';
const port = 5432;
const database = 'd7adg1n2jf2rqt';
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