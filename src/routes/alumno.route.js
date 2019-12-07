import { Router } from 'express';

import { obtenerAlumnos, crearAlumno, obtenerAlumno, borrarAlumno, modificarAlumno } from '../controllers/alumno.controller';

const alumnoRuta = Router();

alumnoRuta.get('/', obtenerAlumnos);

alumnoRuta.get('/:idAlumno', obtenerAlumno);

alumnoRuta.post('/', crearAlumno);

alumnoRuta.put('/:idAlumno', modificarAlumno);

alumnoRuta.delete('/:idAlumno', borrarAlumno);

export default alumnosRuta;