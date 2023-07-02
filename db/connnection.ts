import { Options, Sequelize } from "sequelize";

const user = 'pubttwrcsdxvgl';
const password = '1b9a3379ca07066c24e47e27be4916ca2cdfbd9083f96c4c8a47dc94b082c4ac';
const host = 'ec2-34-197-91-131.compute-1.amazonaws.com';
const port = 5432;
const database = 'd2pprl600mfs20';
const typeDatabase = 'postgres';

const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;

console.log(url);

const options: Options = {
    dialect: 'postgres', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql'
    logging: false, // false
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
};

const sequelizeConnection = new Sequelize(url, options);
export default sequelizeConnection;