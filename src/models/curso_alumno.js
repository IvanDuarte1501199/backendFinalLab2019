import Sequelize from 'sequelize';
import database from '../database/database';

const Curso_alumno = database.define('curso_alumno', {
 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    alumnoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

export default Curso_alumno;