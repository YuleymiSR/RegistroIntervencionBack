// RECURSO ROUTER
/*eslint-disable*/

import { recurso_control } from '../controllers/recurso'
import { Router } from 'express';



export var recurso_router = Router();
recurso_router.post('/recurso/crear',recurso_control.create);
recurso_router.put('/recurso/actualizar/:recurso_id', recurso_control.upDateById);
recurso_router.get('/recurso/traertodos', recurso_control.getAll);
recurso_router.get('/recurso/borrar/:recurso_id', recurso_control.deleteById);
recurso_router.get('/recurso/encontrar/:palabra', recurso_control.findByLike);
recurso_router.get('/recurso/getById/:recurso_id', recurso_control.getById);