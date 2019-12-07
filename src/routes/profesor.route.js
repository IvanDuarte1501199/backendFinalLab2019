import { Router } from 'express';

import { obtenerProfesores, obtenerProfesor, crearProfesor, modificarProfesor, borrarProfesor } from '../controllers/profesor.controller';

const profesorRuta = Router();

profesorRuta.get('/', obtenerProfesores);

profesorRuta.get('/:idAlumno', obtenerProfesor);

profesorRuta.post('/', crearProfesor);

profesorRuta.put('/:idAlumno', modificarProfesor);

profesorRuta.delete('/:idAlumno', borrarProfesor);

export default profesorRuta;