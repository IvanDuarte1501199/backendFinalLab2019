import { Router } from 'express';

import { obtenerAlumnos, crearAlumno, obtenerAlumno, borrarAlumno, modificarAlumno } from '../controllers/alumno.controller';

const alumnosRuta = Router();

alumnosRuta.get('/', obtenerAlumnos);

alumnosRuta.get('/:idAlumno', obtenerAlumno);

alumnosRuta.post('/', crearAlumno);

alumnosRuta.put('/:idAlumno', modificarAlumno);

alumnosRuta.delete('/:idAlumno', borrarAlumno);

export default alumnosRuta;