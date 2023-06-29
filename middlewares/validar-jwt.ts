import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/mod_user/usuario';

interface CustomRequest extends Request {
    user?: User;
  }

const validarJWT = async (req: CustomRequest, res: Response, next: NextFunction) => {
  // console.log({req})
    const token = req.header('token');
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload | undefined;
    if (!decodedToken) {
      throw new Error();
    }
    // decodificar token para obtener el id == uid
    const { uid } = decodedToken as { uid: string };
    // Leer el usuario que corresponde al uid
    const user = await User.findByPk(uid);

    if (!user) {
      return res.status(401).json({
        msg: 'Token no válido - usuario no existe en la DB',
      });
    }

    // Verificar si el uid tiene estado true
    if (!user.estado) {
      return res.status(401).json({
        msg: 'Token no válido - usuario con estado: false',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }
};

export default validarJWT;
