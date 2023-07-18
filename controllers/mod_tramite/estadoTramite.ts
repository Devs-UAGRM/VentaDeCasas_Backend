import { Request, Response } from "express";
import EstadoTramite from "../../models/mod_tramite/estadoTramite";
import { saveBitacora } from "../mod_user/bitacora";

export const gets = async (req: Request, res: Response) => {
    const obj = await EstadoTramite.findAll();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Obtener los datos del estado de todos los tramites'
    });
    res.json({ obj })
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await EstadoTramite.findByPk(id);
    if (obj) {
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Obtener los datos del estado de un tramite'
        });
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe un EstadoTramite con el id : ${id}`
        })
    }
}

export const post = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const obj = new EstadoTramite(body);
        await obj.save();
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Creacion de un nuevo estado de un tramite'
        });
        res.json({
            msg: 'El EstadoTramite se creo correctamente',
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
        const obj = await EstadoTramite.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el EstadoTramite con ese ID`,
            })
        }
        await obj.update(body);
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Actualizacion del estado de un tramite'
        });
        res.json({
            msg: `El EstadoTramite con el id ${id} fue actualizado correctamente`,
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
    const obj = await EstadoTramite.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el EstadoTramite con el id: ' + id
        })
    }
    await obj.destroy();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos del estado de un tramite permanentemente'
    });
    res.json({
        msg: `El EstadoTramite con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
}

export const deletState = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await EstadoTramite.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Rol con el id : ' + id
        })
    }
    await obj.update({ estado: false });
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos del estado de un tramite'
    });
    res.json({
        msg: `El EstadoTramite con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
}