import { Request, Response } from "express";
import Propiedad from "../../models/mod_casas/propiedad";
import { saveBitacora } from "../mod_user/bitacora";

export const gets = async (req: Request, res: Response) => {
    const obj = await Propiedad.findAll();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Obtener los datos de todas las Propiedades'
    });
    res.json({ obj })
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Propiedad.findByPk(id);
    if (obj) {
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Obtener los datos de una Propiedad'
        });
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe una Propiedad con el id : ${id}`
        })
    }
}

export const post = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const obj = new Propiedad(body);
        await obj.save();
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Creacion de una Propiedad'
        });
        res.json({
            msg: 'La Propiedad se creo correctamente',
            obj
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const put = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const obj = await Propiedad.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen una Propiedad con ese ID`,
            })
        }
        await obj.update(body);
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Actualizar los datos de una Propiedad'
        });
        res.json({
            msg: `La Propiedad con el id ${id} fue actualizado correctamente`,
            obj
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Propiedad.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe una Propiedad con el id: ' + id
        })
    }
    await obj.destroy();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos de una Propiedad permanentemente'
    });
    res.json({
        msg: `La Propiedad con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
}

export const deletState = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Propiedad.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe la Propiedad con el id : ' + id
        })
    }
    await obj.update({ estado: false });
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos de una Propiedad'
    });
    res.json({
        msg: `La Propiedad con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
}