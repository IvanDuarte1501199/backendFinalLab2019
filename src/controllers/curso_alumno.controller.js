import Curso_alumno from '../models/curso_alumno';
import { Op } from 'sequelize';

export async function obtenerCursoAlumnos(req, res) {

    try {
        const curso_alumnos = await Curso_alumno.findAll();

        res.json(curso_alumnos);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearCursoAlumno(req, res) {
    const {id, cursoId, alumnoId} = req.body;
    try {
        const curso_alumno = await Curso_alumno.create({
            id, 
            cursoId, 
            alumnoId
        });

        if (curso_alumno) {
            res.status(201).json({
                data: curso_alumno
            });
        } else {
            res.json(
                {}
            );
        }
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }

}

export async function obtenerCursoAlumno(req, res) {

    try {
        const curso_alumno = await Curso_alumno.findOne({
            where: { id: req.params.idCursoAlumno }
        });


        if (curso_alumno) {
            res.status(200).json(
                curso_alumno
            );
        } else {
            res.json({
                data: {}
            });
        }
    }

    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function borrarCursoAlumno(req, res) {
    const { idCursoAlumno } = req.params;
    try {
        const cantidadFilasBorradas = await Curso_alumno.destroy({
            where: { id: idCursoAlumno }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} alumnos del curso`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarCursoAlumno(req, res) {
    const { idCursoAlumno } = req.params;
    const { id, cursoId, alumnoId} = req.body;
    try{
        const curso_alumno = await Curso_alumno.findOne({
            where: { id: idCursoAlumno }
        })
        if(curso_alumno) {
            const cursoAlumnoModificado = await curso_alumno.update({
                id, 
                cursoId, 
                alumnoId
            });

            res.json({
                data: cursoAlumnoModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el alumno con el id: ${idCursoAlumno}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
}