import { Request, Response } from "express";
import bcrypt from "bcrypt";

import Usuario from "../../models/mod_user/usuario";
import { saveBitacora } from "../../controllers/mod_user/bitacora";

export const gets = async (req: Request, res: Response) => {
    const obj = await Usuario.findAll();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Obtener los datos de todos los usuarios'
    });
    res.json({ obj })
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id);
    if (obj) {
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Obtener los datos de un usuario'
        });
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe un Usuario con el id : ${id}`
        })
    }
}

export const post = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const obj = new Usuario(body);
        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        obj.password = bcrypt.hashSync(obj.password, salt);
        await obj.save();

        // Guardar en la bitacora
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Creación de un Usuario'
        });

        res.json({
            msg: 'El Usuario se creo correctamente',
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
        const obj = await Usuario.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen el Usuario con ese ID`,
            })
        }
        if (body.password) {
            // Encriptar la contraseña
            const salt = bcrypt.genSaltSync();
            body.password = bcrypt.hashSync(body.password, salt);
        }
        await obj.update(body);
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Actualizar los datos de un usuario'
        });
        res.json({
            msg: `El Usuario con el id ${id} fue actualizado correctamente`,
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
    const obj = await Usuario.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Usuario con el id: ' + id
        })
    }
    await obj.destroy();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos de un usuario permanentemente'
    });
    res.json({
        msg: `El Usuario con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
}

export const deletState = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe el Usuario con el id : ' + id
        })
    }
    await obj.update({ estado: false });
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar los datos de un usuario'
    });
    res.json({
        msg: `El Usuario con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
}