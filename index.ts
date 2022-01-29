/*eslint-disable*/

import { sequelize } from './api/config/sequelize';
import { NextFunction, Request, Response } from 'express';

import { equipo_router } from './api/routes/equipo';
import { intervencion_router } from './api/routes/intervencion';
import { recurso_router } from './api/routes/recurso';
import { registro_router } from './api/routes/registro';


var express = require('express');
var bodyParser = require('body-parser');
const PUERTO = process.env.PORT || 3000;

var app = express();

// configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CONFIGURANDO EL CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    next();
});


// usando las rutas importadas

app.use('/api', equipo_router);
app.use('/api', intervencion_router);
app.use('/api', recurso_router);
app.use('/api', registro_router);

app.get('/', (req: Request, res: Response) => { res.send('La api funciona!!'); });
app.listen(PUERTO, function () {
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con éxito");
    }).catch((error: any) => {
        console.log(error);
        console.log("Error al crear la base de datos");
    });
    console.log("Servidor corriendo correctamente en el puerto " + PUERTO);
});
 