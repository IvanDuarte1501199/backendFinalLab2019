import Sequelize from 'sequelize';
import database from '../database/database';
import Profesor from '../models/Profesor';

const Curso = database.define('curso', {
 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fechaInicio: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    fechaFin: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    profesorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    profesorauxId: {
        type: Sequelize.INTEGER
    }
});

export default Curso;