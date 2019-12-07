import Profesor from '../models/Profesor';
import { Op } from 'sequelize';

export async function obtenerProfesores(req, res) {

    try {
        const profesores = await Profesor.findAll();

        res.json(profesores);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearProfesor(req, res) {
    const {id, dni, nombre, apellido, fechaNacimiento} = req.body;
    try {
        const profesor = await Profesor.create({
            id, 
            dni, 
            nombre, 
            apellido, 
            fechaNacimiento
        });

        if (profesor) {
            res.status(201).json({
                data: profesor
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

export async function obtenerProfesor(req, res) {

    try {
        const profesor = await Profesor.findOne({
            where: { id: req.params.idProfesor }
        });


        if (profesor) {
            res.status(200).json(
                profesor
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

export async function borrarProfesor(req, res) {
    const { idProfesor } = req.params;
    try {
        const cantidadFilasBorradas = await Profesor.destroy({
            where: { id: idProfesor }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} profesores`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarProfesor(req, res) {
    const { idProfesor } = req.params;
    const { id, dni, nombre, apellido, fechaNacimiento} = req.body;
    try{
        const profesor = await Profesor.findOne({
            where: { id: idProfesor }
        })
        if(profesor) {
            const profesorModificado = await profesor.update({
                id, 
                dni, 
                nombre, 
                apellido, 
                fechaNacimiento
            });

            res.json({
                data: profesorModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el profesor con el id: ${idProfesor}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
}