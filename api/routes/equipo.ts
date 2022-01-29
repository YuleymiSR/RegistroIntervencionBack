// EQUIPO ROUTER
/*eslint-disable*/

import { equipo_control } from '../controllers/equipo'
import { Router } from 'express';



export var equipo_router = Router();
equipo_router.post('/equipo/crear',equipo_control.create);
equipo_router.put('/equipo/actualizar/:equipo_id', equipo_control.upDateById);
equipo_router.get('/equipo/traertodos', equipo_control.getAll);
equipo_router.delete('/equipo/borrar/:equipo_id', equipo_control.deleteById);
equipo_router.get('/equipo/encontrar/:palabra', equipo_control.findByLike);
equipo_router.get('/equipo/getById/:equipo_id', equipo_control.getById);