import { Router } from 'express';

import { obtenerProfesores, obtenerProfesor, crearProfesor, modificarProfesor, borrarProfesor } from '../controllers/profesor.controller';

const profesorRuta = Router();

profesorRuta.get('/', obtenerProfesores);

profesorRuta.get('/:idProfesor', obtenerProfesor);

profesorRuta.post('/', crearProfesor);

profesorRuta.put('/:idProfesor', modificarProfesor);

profesorRuta.delete('/:idProfesor', borrarProfesor);

export default profesorRuta;