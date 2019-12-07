import express from 'express';
import morgan from 'morgan';
import database from './database/database';
import alumnosRuta from './routes/alumno.route';
import profesorRuta from './routes/profesor.route';
import cursoRuta from './routes/curso.route';
import cursoalumnoRuta from './routes/curso_alumno.route';


//inicializar express
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/alumnos', alumnosRuta);
app.use('/api/profesores', profesorRuta);
app.use('/api/cursos', cursoRuta);
app.use('/api/curso_alumnos', cursoalumnoRuta);

//sincronizacion con la db
database.sync()
.then(() => console.log('Base actualizada'));

//exportamos la app
export defau