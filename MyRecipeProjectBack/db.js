import { Sequelize, DataTypes } from 'sequelize';


async function initDatabase() {

    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_LOGIN,
        process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    });




    await sequelize.sync({ alter: true });

 
}


export { initDatabase };