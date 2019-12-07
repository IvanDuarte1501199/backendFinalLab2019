import { Router } from 'express';

import { obtenerCursos, crearCurso, obtenerCurso, borrarCurso, modificarCurso } from '../controllers/curso.controller';

const cursoRuta = Router();

cursoRuta.get('/', obtenerCursos);

cursoRuta.get('/:idCurso', obtenerCurso);

cursoRuta.post('/', crearCurso);

cursoRuta.put('/:idCurso', modificarCurso);

cursoRuta.delete('/:idCurso', borrarCurso);




export default cursoRuta;