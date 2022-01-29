// REGISTRO ROUTER
/*eslint-disable*/

import { registro_control } from '../controllers/registro'
import { Router } from 'express';



export var registro_router = Router();
registro_router.post('/registro/crear',registro_control.create);
registro_router.put('/registro/actualizar/:registro_id', registro_control.upDateById);
registro_router.get('/registro/traertodos', registro_control.getAll);
registro_router.get('/registro/borrar/:registro_id', registro_control.deleteById);
registro_router.get('/registro/encontrar/:palabra', registro_control.findByLike);
registro_router.get('/registro/getById/:registro_id', registro_control.getById);