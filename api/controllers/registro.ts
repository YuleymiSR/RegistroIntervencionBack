// REGISTRO CONTROLLERS

/*eslint-disable*/

import { Request, Response } from 'express';
import { Intervencion, Registro, Equipo, Recurso} from './../config/sequelize';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export var registro_control = {
    findByLike: (req: Request, res: Response) => {
        let { palabra } = req.params;
        Registro.findAll({
            where: {
                nombre_inter: {
                    [Op.like]: '%' + palabra + '%'
                }
            },

        }).then((respuesta: any) => {
            if (respuesta) {
                res.status(201).json({
                    message: 'Ok',
                    content: respuesta
                })
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al encontrar registro'
                })
            }
        })
    },
    getAll: (req: Request, res: Response) => {
        let { registro_id } = req.body;
        Registro.findAll({
            include:[{
                model: Intervencion,
                include:[
                    {model: Equipo },
                    {model: Recurso },

            ]
            }]
        }).then((registro: any) => {
            if (registro) {
                res.status(201).json({
                    message: 'Ok',
                    content: registro
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer registros'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    create: (req: Request, res: Response) => {
        Registro.create(req.body).then((respuesta: any) => {
            if (respuesta) {
                res.status(201).json({
                    message: 'Ok',
                    content: respuesta
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al crear registro'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    deleteById: (req: Request, res: Response) => {
        let { registro_id } = req.params;
        Registro.destroy( {
                where: {
                    registro_id 
                }
            }).then((registro: any) => {
                if (registro) {
                    res.status(201).json({
                        message: 'Ok',
                        content: registro
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al eliminar registro'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
    },
    upDateById: (req: any, res: Response) => {

            let { registro_id } = req.params;

            Registro.update(req.body, {
                where: { 
                    registro_id 
                }
            }).then((registro: any) => {
                if (registro) {
                    res.status(201).json({
                        message: 'Ok',
                        content: registro
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al actualizar registro'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
        



    },
    getById: (req: Request, res: Response) => {
        let { registro_id } = req.params;
        Registro.findAll({
            where: {
                registro_id  
            }          
        }).then((registro: any) => {
            if (registro) {
                res.status(201).json({
                    message: 'Ok',
                    content: registro
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer registro'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    }

}