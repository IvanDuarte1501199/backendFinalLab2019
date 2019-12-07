import Sequelize from 'sequelize';
import { truncate } from 'fs';

//constructor de database/sequelize generico: new Sequelize(nombreDeLaBaseDeDatos, Usuario, Contraseña, y sequelizeConfig)
const database = new Sequelize(
    'lab4-final','postgres','admin', {
        //force: true,
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
);

//exportamos la base de datos
export default database;