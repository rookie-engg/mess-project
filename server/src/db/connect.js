import {Sequelize} from 'sequelize';

export const dbInstance = new Sequelize({
  dialect: process.env.DB_DAILECT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
});
