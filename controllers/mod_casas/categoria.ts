import { Request, Response } from "express";
import Categoria from "../../models/mod_casas/categoria";
import { saveBitacora } from "../mod_user/bitacora";

export const getCategorias = async (req: Request, res: Response) => {
    const categoria = await Categoria.findAll();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Obtener los datos de todas las categorias'
    });
    res.json({ categoria })
}

export const getCategoria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Obtener los datos de una categoria'
        });
        res.json({ categoria });
    } else {
        res.status(404).json({
            msg: `No existe una categoria con el id : ${id}`
        })
    }
}

export const postCategoria = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const categoria = new Categoria(body);
        await categoria.save();
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Creacion de una categoria'
        });
        res.json({
            msg: 'La categoria se creo correctamente',
            categoria
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putCategoria = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({
                mensaje: `No existen la categoria con ese ID`,
            })
        }
        await categoria.update(body);
        await saveBitacora({
            token: req.header('token')!,
            accion: 'Actualizar los datos de una categoria'
        });
        res.json({
            msg: `La categoria con el id ${id} fue actualizado correctamente`,
            categoria
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteCategoria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg: 'No existe la categoria con el id: ' + id
        })
    }
    await categoria.destroy();
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar permanentemente una categoria'
    });
    res.json({
        msg: `La categoria con el id ${id} fue eliminado permanentemente con exito..!!!`,
        categoria
    });
}

export const deleteCategoriaState = async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg: 'No existe la categoria con el id : ' + id
        })
    }
    await categoria.update({ estado: false });
    await saveBitacora({
        token: req.header('token')!,
        accion: 'Eliminar una categoria'
    });
    res.json({
        msg: `La categoria con el id ${id} fue eliminado con exito..!!!`,
        categoria
    });
}