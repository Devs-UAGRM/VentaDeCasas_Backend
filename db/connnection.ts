import { Sequelize } from "sequelize";

const db = new Sequelize('houseSales', 'postgres', 'password', {
    host: 'localhost',
    dialect: "postgres",
})

export default db;