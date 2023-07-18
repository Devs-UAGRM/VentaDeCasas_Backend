import { Request, Response } from "express";
import Tramite from "../../models/mod_tramite/tramite";
import { saveBitacora } from "../mod_user/bitacora";

export const gets = async (req: Request, res: Response) => {
    const obj = await Tramite.findAll();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Obtener los datos de todos los tramites'
    });
    res.json({ obj })
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Tramite.findByPk(id);
    if (obj) {
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Obtener los datos de un tramite'
        });
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe un Tramite con el id : ${id}`
        })
    }
}

export const post = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const obj = new Tramite(body);
        await obj.save();
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Creacion de un tramite'
        });
        res.json({
            msg: 'El Tramite se creo correctamente',
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
        const obj = await Tramite.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el Tramite con ese ID`,
            })
        }
        await obj.update(body);
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Actualizar los datos de un tramite'
        });
        res.json({
            msg: `El Tramite con el id ${id} fue actualizado correctamente`,
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
    const obj = await Tramite.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Tramite con el id: ' + id
        })
    }
    await obj.destroy();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos de un tramite permanentemente'
    });
    res.json({
        msg: `El Tramite con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
}

export const deletState = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Tramite.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Tramite con el id : ' + id
        })
    }
    await obj.update({ estado: false });
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos de un tramite'
    });
    res.json({
        msg: `El Tramite con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
}