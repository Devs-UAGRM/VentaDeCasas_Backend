import User from "../models/mod_user/usuario";
import Role from "../models/mod_user/rol";
import Targeta from "../models/mod_pagos/tarjeta";

export const isRoleValue = async (rol: string) => {
  try {
    const existRole = await Role.findOne({ where: { rol: rol } });
    if (!existRole) {
      throw new Error(`El rol ${rol} no está registrado en la base de datos`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el rol: ${error}`);
  }
};

export const isRoleADM = async (rol: string) => {
  try {
    const existRole = await Role.findOne({ where: { rol: rol } });
    if (!existRole) {
      throw new Error(`El rol ${rol} no está registrado en la base de datos`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el rol: ${error}`);
  }
};

export const isEmailExist = async (correo: string) => {
  try {
    const existEmail = await User.findOne({ where: { correo: correo } });
    if (existEmail) {
      throw new Error(`El correo "${correo}" ya está registrado`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el correo: ${error}`);
  }
};

export const isUserForID = async (id: string) => {
  try {
    const existUserID = await User.findByPk(id);
    if (!existUserID) {
      throw new Error(`El ID ${id} no existe`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el ID: ${error}`);
  }
};

export const isRolForID = async (id: string) => {
  try {
    const existRoleID = await Role.findByPk(id);
    if (!existRoleID) {
      throw new Error(`El ID ${id} no existe - Rol`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el Rol - ID: ${error}`);
  }
};

export const isNumTargetaExist = async (num_targeta: string) => {
    try {
        const existEmail = await Targeta.findOne({ where: { num_targeta: num_targeta } });
        if (existEmail) {
        throw new Error(`El numero de Targeta  "${num_targeta}" ya está registrado`);
        }
    } catch (error) {
        throw new Error(`Error al verificar el numero de Targeta: ${error}`);
    }
};


