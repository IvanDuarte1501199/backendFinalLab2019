import Curso from '../models/curso';
import { Op } from 'sequelize';

export async function obtenerCursos(req, res) {

    try {
        const cursos = await Curso.findAll();

        res.json(cursos);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearCurso(req, res) {
    const { id, nombre, fechaInicio, fechaFin, profesorId, profesorauxId } = req.body;
    try {
        const curso = await Curso.create({
            id,
            nombre,
            fechaInicio,
            fechaFin,
            profesorId,
            profesorauxId
        });

        if (curso) {
            res.status(201).json({
                data: curso
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

export async function obtenerCurso(req, res) {

    try {
        const curso = await Curso.findOne({
            where: { id: req.params.idCurso }
        });


        if (curso) {
            res.status(200).json(
                curso
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

export async function borrarCurso(req, res) {
    const { idCurso } = req.params;
    try {
        const cantidadFilasBorradas = await Curso.destroy({
            where: { id: idCurso }
        });

        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} cursos`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarCurso(req, res) {
    const { idCurso } = req.params;
    const {  id, nombre, fechaInicio, fechaFin, profesorId, profesorauxId  } = req.body;
    try {
        const curso = await Curso.findOne({
            where: { id: idCurso }
        })
        if (curso) {
            const cursoModificado = await Curso.update({
                id,
                nombre,
                fechaInicio,
                fechaFin,
                profesorId,
                profesorauxId
            });

            res.json({
                data: cursoModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el curso con el id: ${idCurso}`
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}