"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('houseSales', 'postgres', 'password', {
    host: 'localhost',
    dialect: "postgres",
});
exports.default = db;
//# sourceMappingURL=connnection.js.map