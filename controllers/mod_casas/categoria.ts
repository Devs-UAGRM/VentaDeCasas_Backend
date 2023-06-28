import { Request, Response } from "express";
import Categoria from "../../models/mod_casas/categoria";

export const getCategorias = async ( req : Request, res : Response ) => {
    const categoria = await Categoria.findAll();
    res.json({categoria})
}

export const getCategoria = async ( req : Request, res : Response ) => {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
        res.json({categoria});
    } else {
        res.status(404).json({
            msg : `No existe una categoria con el id : ${id}`
        })
    }
}

export const postCategoria = async ( req : Request, res : Response ) => {
    const {body} = req;
    try {
        const categoria = new Categoria(body);
        await categoria.save();
        res.json({
            msg: 'La categoria se creo correctamente',
            categoria
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }
}

export const putCategoria = async ( req : Request, res : Response ) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({
                mensaje :`No existen la categoria con ese ID`,
            })
        }
        await categoria.update(body);
        res.json({
            msg : `La categoria con el id ${id} fue actualizado correctamente`,
            categoria
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteCategoria = async ( req : Request, res : Response ) => {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg : 'No existe la categoria con el id: ' + id
        })
    }
    await categoria.destroy();
    res.json({
        msg : `La categoria con el id ${id} fue eliminado permanentemente con exito..!!!`,
        categoria
    });
}

export const deleteCategoriaState = async ( req : Request, res : Response ) => {
    const {id} = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg : 'No existe la categoria con el id : ' + id
        })
    }
    await categoria.update( { estado : false });
    res.json({
        msg : `La categoria con el id ${id} fue eliminado con exito..!!!`,
        categoria
    });
}