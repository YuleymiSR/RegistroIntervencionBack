// INTERVENCION CONTROLLERS

/*eslint-disable*/

import { Request, Response } from 'express';
import { Intervencion } from './../config/sequelize';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export var intervencion_control = {
    findByLike: (req: Request, res: Response) => {
        let { palabra } = req.params;
        Intervencion.findAll({
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
                    content: 'Error al encontrar intervencion'
                })
            }
        })
    },
    getAll: (req: Request, res: Response) => {
        Intervencion.findAll({
        }).then((intervencion: any) => {
            if (intervencion) {
                res.status(201).json({
                    message: 'Ok',
                    content: intervencion
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer intervencions'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    create: (req: Request, res: Response) => {
        Intervencion.create(req.body).then((respuesta: any) => {
            if (respuesta) {
                res.status(201).json({
                    message: 'Ok',
                    content: respuesta
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al crear intervencion'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    deleteById: (req: Request, res: Response) => {
        let { intervencion_id } = req.params;
        Intervencion.destroy( {
                where: {
                    intervencion_id 
                }
            }).then((intervencion: any) => {
                if (intervencion) {
                    res.status(201).json({
                        message: 'Ok',
                        content: intervencion
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al eliminar intervencion'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
    },
    upDateById: (req: any, res: Response) => {

            let { intervencion_id } = req.params;

            Intervencion.update(req.body, {
                where: { 
                    intervencion_id 
                }
            }).then((intervencion: any) => {
                if (intervencion) {
                    res.status(201).json({
                        message: 'Ok',
                        content: intervencion
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al actualizar intervencion'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
        



    },
    getById: (req: Request, res: Response) => {
        let { intervencion_id } = req.params;
        Intervencion.findAll({
            where: {
                intervencion_id  
            }          
        }).then((intervencion: any) => {
            if (intervencion) {
                res.status(201).json({
                    message: 'Ok',
                    content: intervencion
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer intervencion'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    }

}