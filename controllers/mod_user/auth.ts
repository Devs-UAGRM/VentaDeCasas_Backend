import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Usuario from '../../models/mod_user/usuario';
import { JWTgenerate } from '../../helpers/jwt-generate';
import { saveBitacora } from './bitacora';

const login = async (req: Request, res: Response): Promise<void> => {
  const { correo, password } = req.body;

  try {
    // Verificar si el email existe
    const user = await Usuario.findOne({
      where: {
        correo: correo
      }
    });

    // const user = await Usuario.findOne({ correo });
    if (!user) {
      res.status(400).json({
        msg: 'Usuario / Password no son correctos - correo',
      });
      return;
    }

    // Si el usuario esta activo
    if (!user.estado) {
      res.status(400).json({
        msg: 'Usuario / Password no son correctos - estado: false',
      });
      return;
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).json({
        msg: 'Usuario / Password no son correctos - password',
      });
      return;
    }

    // Generar en JWT
    const token = await JWTgenerate(user.id.toString());
    await saveBitacora({
      token: token!,
      accion: 'Inicio de sesión'
    });
    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

export {
  login,
};


