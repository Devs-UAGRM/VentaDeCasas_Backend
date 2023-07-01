"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connnection_1 = __importDefault(require("../db/connnection"));
const auth_1 = __importDefault(require("../routes/mod_user/auth"));
const rol_1 = __importDefault(require("../routes/mod_user/rol"));
const categoria_1 = __importDefault(require("../routes/mod_casas/categoria"));
const tramite_1 = __importDefault(require("../routes/mod_tramites/tramite"));
const estadoTramite_1 = __importDefault(require("../routes/mod_tramites/estadoTramite"));
const usuario_1 = __importDefault(require("../routes/mod_user/usuario"));
const bitacora_1 = __importDefault(require("../routes/mod_user/bitacora"));
const accion_1 = __importDefault(require("../routes/mod_user/accion"));
const tarjeta_1 = __importDefault(require("../routes/mod_pagos/tarjeta"));
const propiedad_1 = __importDefault(require("../routes/mod_casas/propiedad"));
const img_prop_1 = __importDefault(require("../routes/mod_casas/img_prop"));
const precio_1 = __importDefault(require("../routes/mod_casas/precio"));
const compvent_1 = __importDefault(require("../routes/mod_pagos/compvent"));
const cuotas_1 = __importDefault(require("../routes/mod_pagos/cuotas"));
const detalltram_1 = __importDefault(require("../routes/mod_tramites/detalltram"));
const fechtram_1 = __importDefault(require("../routes/mod_tramites/fechtram"));
const detallpago_1 = __importDefault(require("../routes/mod_pagos/detallpago"));
class Server {
    constructor() {
        this.apiPaths = {
            auth: "/api/auth",
            roles: "/api/roles",
            categoria: "/api/categoria",
            tramite: "/api/tramite",
            estatram: "/api/estatram",
            usuario: "/api/usuario",
            bitacora: "/api/bitacora",
            accion: "/api/accion",
            tarjeta: "/api/tarjeta",
            propiedad: "/api/propiedad",
            imgprop: "/api/imgprop",
            precio: "/api/precio",
            compvent: "/api/compvent",
            cuotas: "/api/cuotas",
            detalltram: "/api/detalltram",
            fechtram: "/api/fechtram",
            detallpago: "/api/detallpago",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        //    Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connnection_1.default.authenticate();
                console.log("Database online");
            }
            catch (error) {
                console.log("Database ofline - " + error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // LECTURA DEL BODY
        this.app.use(express_1.default.json());
        // CARPETA PUBLICA
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.roles, rol_1.default);
        this.app.use(this.apiPaths.categoria, categoria_1.default);
        this.app.use(this.apiPaths.tramite, tramite_1.default);
        this.app.use(this.apiPaths.estatram, estadoTramite_1.default);
        this.app.use(this.apiPaths.usuario, usuario_1.default);
        this.app.use(this.apiPaths.bitacora, bitacora_1.default);
        this.app.use(this.apiPaths.accion, accion_1.default);
        this.app.use(this.apiPaths.tarjeta, tarjeta_1.default);
        this.app.use(this.apiPaths.propiedad, propiedad_1.default);
        this.app.use(this.apiPaths.imgprop, img_prop_1.default);
        this.app.use(this.apiPaths.precio, precio_1.default);
        this.app.use(this.apiPaths.compvent, compvent_1.default);
        this.app.use(this.apiPaths.cuotas, cuotas_1.default);
        this.app.use(this.apiPaths.detalltram, detalltram_1.default);
        this.app.use(this.apiPaths.fechtram, fechtram_1.default);
        this.app.use(this.apiPaths.detallpago, detallpago_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en le puerto : " + this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map