import Sequelize from 'sequelize';
import database from '../database/database';

const curso = database.define('curso', {
 
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
        type: Sequelize.DATE,
        allowNull: false
    },
    FechaFin: {
        type: Sequelize.DATE,
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

export default curso;