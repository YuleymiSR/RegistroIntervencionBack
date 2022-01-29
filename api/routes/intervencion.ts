// EQUIPO ROUTER
/*eslint-disable*/

import { intervencion_control } from '../controllers/intervencion'
import { Router } from 'express';



export var intervencion_router = Router();
intervencion_router.post('/intervencion/crear',intervencion_control.create);
intervencion_router.put('/intervencion/actualizar/:intervencion_id', intervencion_control.upDateById);
intervencion_router.get('/intervencion/traertodos', intervencion_control.getAll);
intervencion_router.get('/intervencion/borrar/:intervencion_id', intervencion_control.deleteById);
intervencion_router.get('/intervencion/encontrar/:palabra', intervencion_control.findByLike);
intervencion_router.get('/intervencion/getById/:intervencion_id', intervencion_control.getById);