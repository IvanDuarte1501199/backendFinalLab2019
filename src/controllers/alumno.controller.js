import Alumno from '../models/Alumno';
import { Op } from 'sequelize';

export async function obtenerAlumnos(req, res) {

    try {
        const alumnos = await Alumno.findAll();

        res.json(alumnos);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearAlumno(req, res) {
    const {id, dni, nombre, apellido, fechaNacimiento} = req.body;
    try {
        const alumno = await Alumno.create({
            id, 
            dni, 
            nombre, 
            apellido, 
            fechaNacimiento
        });

        if (alumno) {
            res.status(201).json({
                data: alumno
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


export async function obtenerAlumno(req, res) {

    try {
        const alumno = await Alumno.findOne({
            where: { id: req.params.idAlumno }
        });


        if (alumno) {
            res.status(200).json(
                alumno
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

export async function borrarAlumno(req, res) {
    const { idAlumno } = req.params;
    try {
        const cantidadFilasBorradas = await Alumno.destroy({
            where: { id: idAlumno }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} alumnos`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarAlumno(req, res) {
    const { idAlumno } = req.params;
    const { id, dni, nombre, apellido, fechaNacimiento} = req.body;
    try{
        const alumno = await Alumno.findOne({
            where: { id: idAlumno }
        })
        if(alumno) {
            const alumnoModificado = await alumno.update({
                id, 
                dni, 
                nombre, 
                apellido, 
                fechaNacimiento
            });

            res.json({
                data: alumnoModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el alumno con el id: ${idAlumno}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }


}