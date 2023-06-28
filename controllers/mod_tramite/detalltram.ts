import { Request, Response } from "express";
import DetallTram from "../../models/mod_tramite/detalltram";

export const gets = async ( req : Request, res : Response ) => {
    const obj = await DetallTram.findAll();
    res.json({obj})
}

export const get = async ( req : Request, res : Response ) => {
    const { id } = req.params;
    const obj = await DetallTram.findByPk(id);
    if (obj) {
        res.json({obj});
    } else {
        res.status(404).json({
            msg : `No existe una DetallTram con el id : ${id}`
        })
    }
}

export const post = async ( req : Request, res : Response ) => {
    const {body} = req;
    try {
        const obj = new DetallTram(body);
        await obj.save();
        res.json({
            msg: 'La DetallTram se creo correctamente',
            obj
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }
}

export const put = async ( req : Request, res : Response ) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const obj = await DetallTram.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje :`No existen una DetallTram con ese ID`,
            })
        }
        await obj.update(body);
        res.json({
            msg : `La DetallTram con el id ${id} fue actualizado correctamente`,
            obj
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const delet = async ( req : Request, res : Response ) => {
    const { id } = req.params;
    const obj = await DetallTram.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg : 'No existe una DetallTram con el id: ' + id
        })
    }
    await obj.destroy();
    res.json({
        msg : `La DetallTram con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
}

export const deletState = async ( req : Request, res : Response ) => {
    const {id} = req.params;
    const obj = await DetallTram.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg : 'No existe la DetallTram con el id : ' + id
        })
    }
    await obj.update( { estado : false });
    res.json({
        msg : `La DetallTram con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
}