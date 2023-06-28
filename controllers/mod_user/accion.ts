import { Request, Response } from "express";
import Accion from "../../models/mod_user/accion";

export const getAccions = async ( req : Request, res : Response ) => {
    const accion = await Accion.findAll();
    res.json({accion})
}

export const getAccion = async ( req : Request, res : Response ) => {
    const { id } = req.params;
    const accion = await Accion.findByPk(id);
    if (accion) {
        res.json({accion});
    } else {
        res.status(404).json({
            msg : `No existe la accion con el id : ${id}`
        })
    }
}

export const postAccion = async ( req : Request, res : Response ) => {
    const {body} = req;
    try {
        const accion = new Accion(body);
        await accion.save();
        res.json({
            msg: 'La accion se creo correctamente',
            accion
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }
}

export const putAccion = async ( req : Request, res : Response ) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const accion = await Accion.findByPk(id);
        if (!accion) {
            return res.status(404).json({
                mensaje :`No existen la accion con ese ID`,
            })
        }
        await accion.update(body);
        res.json({
            msg : `La accion con el id ${id} fue actualizado correctamente`,
            accion
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteAccion = async ( req : Request, res : Response ) => {
    const { id } = req.params;
    const accion = await Accion.findByPk(id);
    if (!accion) {
        return res.status(404).json({
            msg : 'No existe la accion con el id: ' + id
        })
    }
    await accion.destroy();
    res.json({
        msg : `La accion con el id ${id} fue eliminada permanentemente con exito..!!!`,
        accion
    });
}

export const deleteAccionState = async ( req : Request, res : Response ) => {
    const {id} = req.params;
    const accion = await Accion.findByPk(id);
    if (!accion) {
        return res.status(404).json({
            msg : 'No existe la accion con el id : ' + id
        })
    }
    await accion.update( { estado : false });
    res.json({
        msg : `La accion con el id ${id} fue eliminada con exito..!!!`,
        accion
    });
}