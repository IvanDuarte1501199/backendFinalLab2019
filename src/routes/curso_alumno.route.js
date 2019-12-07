import { Router } from 'express';

import { obtenerCursoAlumnos, crearCursoAlumno, obtenerCursoAlumno, borrarCursoAlumno, modificarCursoAlumno } from '../controllers/curso_alumno.controller';

const cursoalumnoRuta = Router();

cursoalumnoRuta.get('/', obtenerCursoAlumnos);

cursoalumnoRuta.get('/:idCursoAlumno', obtenerCursoAlumno);

cursoalumnoRuta.post('/', crearCursoAlumno);

cursoalumnoRuta.put('/:idursoAlumno', modificarCursoAlumno);

cursoalumnoRuta.delete('/:idursoAlumno', borrarCursoAlumno);

export default cursoalumnoRuta;