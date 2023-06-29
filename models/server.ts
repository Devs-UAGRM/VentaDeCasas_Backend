import express, { Application } from "express";
import cors from "cors";

import db from "../db/connnection";

import authRoutes from "../routes/mod_user/auth";
import rolRoutes from "../routes/mod_user/rol";
import categoriaRoutes from "../routes/mod_casas/categoria";
import tramiteRoutes from "../routes/mod_tramites/tramite";
import estatramRoutes from "../routes/mod_tramites/estadoTramite";
import usuarioRoutes from "../routes/mod_user/usuario";
import bitacoraRoutes from "../routes/mod_user/bitacora";
import accionRoutes from "../routes/mod_user/accion";
import tarjetaRoutes from "../routes/mod_pagos/tarjeta";
import propiedadRoutes from "../routes/mod_casas/propiedad";
import imgpropRoutes from "../routes/mod_casas/img_prop";
import precioRoutes from "../routes/mod_casas/precio";
import compventRoutes from "../routes/mod_pagos/compvent";
import cuotasRoutes from "../routes/mod_pagos/cuotas";
import detalltramRoutes from "../routes/mod_tramites/detalltram";
import fechtramRoutes from "../routes/mod_tramites/fechtram";
import detallpagoRoutes from "../routes/mod_pagos/detallpago";

export class Server {

    private app : Application;
    private port : string;
    private apiPaths = {
        auth:         '/api/auth',
        roles:        '/api/roles',
        categoria:    '/api/categoria',
        tramite:      '/api/tramite',
        estatram:      '/api/estatram',
        usuario:     '/api/usuario',
        bitacora:     '/api/bitacora',
        accion:       '/api/accion',
        tarjeta:       '/api/tarjeta',
        propiedad:       '/api/propiedad',
        imgprop:       '/api/imgprop',
        precio:       '/api/precio',
        compvent:       '/api/compvent',
        cuotas:       '/api/cuotas',
        detalltram:       '/api/detalltram',
        fechtram:       '/api/fechtram',
        detallpago:       '/api/detallpago',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //    Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection () {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log('Database ofline - ' + error)
        }
    }

    middlewares () {
        // CORS
        this.app.use( cors() );

        // LECTURA DEL BODY
        this.app.use( express.json() );

        // CARPETA PUBLICA
        this.app.use( express.static('public') );

    }

    routes () {
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.roles, rolRoutes);
        this.app.use(this.apiPaths.categoria, categoriaRoutes);
        this.app.use(this.apiPaths.tramite, tramiteRoutes);
        this.app.use(this.apiPaths.estatram, estatramRoutes );
        this.app.use(this.apiPaths.usuario, usuarioRoutes );
        this.app.use(this.apiPaths.bitacora, bitacoraRoutes );
        this.app.use(this.apiPaths.accion, accionRoutes);
        this.app.use(this.apiPaths.tarjeta, tarjetaRoutes);
        this.app.use(this.apiPaths.propiedad, propiedadRoutes);
        this.app.use(this.apiPaths.imgprop, imgpropRoutes);
        this.app.use(this.apiPaths.precio, precioRoutes);
        this.app.use(this.apiPaths.compvent, compventRoutes);
        this.app.use(this.apiPaths.cuotas, cuotasRoutes);
        this.app.use(this.apiPaths.detalltram, detalltramRoutes);
        this.app.use(this.apiPaths.fechtram, fechtramRoutes);
        this.app.use(this.apiPaths.detallpago, detallpagoRoutes);
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en le puerto : ' + this.port );
            
        })
    }
}