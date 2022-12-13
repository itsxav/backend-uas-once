import { Sequelize } from "sequelize";

const db = new Sequelize('db_japanese','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;