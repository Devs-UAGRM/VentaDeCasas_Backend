import dotenv from "dotenv";
import { Server } from "./models/server";

// CONFIGURACION : dotenv
dotenv.config();

const server = new Server();

server.listen();