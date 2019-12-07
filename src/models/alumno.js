import Sequelize from 'sequelize';
import database from '../database/database';

const Alumno = database.define('alumno', {
 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fechaNacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

export default Alumno;