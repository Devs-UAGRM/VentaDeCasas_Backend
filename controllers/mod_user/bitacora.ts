import { Request, Response } from "express";
import Bitacora from "../../models/mod_user/bitacora";
import Accion from "../../models/mod_user/accion";
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from "../../models/mod_user/usuario";

export const saveBitacora = async (data: { token: string, accion: string }) => {
    const { token, accion } = data;
    const id_usuario = await getUserIdByToken(token);
    const date = new Date().toLocaleString("en-US", { timeZone: "America/La_Paz" });
    const hora = date.split(' ')[1];
    const bitacora = {
        hora_ini: hora,
        hora_fin: hora,
        estado: true,
        id_usuario: id_usuario,
    };
    try {
        const obj = new Bitacora(bitacora);
        const bitacoraCreated = await obj.save();
        const newAccion = {
            accion,
            estado: true,
            id_bitacora: bitacoraCreated.id
        }
        const accionSave = new Accion(newAccion);
        await accionSave.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getUserIdByToken = async (token: any) => {
    const decodedToken = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload | undefined;
    const { uid } = decodedToken as { uid: string };
    const user = await User.findByPk(uid);
    return user?.id;
}


export const gets = async (req: Request, res: Response) => {
    const script = " SELECT * FROM bitacora INNER JOIN usuario ON bitacora.id_usuario = usuario.id INNER JOIN accion ON bitacora.id = accion.id_bitacora";
    const obj = await Bitacora.sequelize?.query(script);
    const data = obj?.[0];
    res.json({ data })
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Bitacora.findByPk(id);
    if (obj) {
        res.json({ obj });
    } else {
        res.status(404).json({
            msg: `No existe una Bitacora con el id : ${id}`
        })
    }
}

export const post = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const obj = new Bitacora(body);
        await obj.save();
        res.json({
            msg: 'La Bitacora se creo correctamente',
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
        const obj = await Bitacora.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                mensaje: `No existen una Bitacora con ese ID`,
            })
        }
        await obj.update(body);
        res.json({
            msg: `La Bitacora con el id ${id} fue actualizado correctamente`,
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
    const obj = await Bitacora.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe una Bitacora con el id: ' + id
        })
    }
    await obj.destroy();
    res.json({
        msg: `La Bitacora con el id ${id} fue eliminado permanentemente con exito..!!!`,
        obj
    });
}

export const deletState = async (req: Request, res: Response) => {
    const { id } = req.params;
    const obj = await Bitacora.findByPk(id);
    if (!obj) {
        return res.status(404).json({
            msg: 'No existe la Bitacora con el id : ' + id
        })
    }
    await obj.update({ estado: false });
    res.json({
        msg: `La Bitacora con el id ${id} fue eliminado con exito..!!!`,
        obj
    });
}