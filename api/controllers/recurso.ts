// RECURSO CONTROLLERS

/*eslint-disable*/

import { Request, Response } from 'express';
import { Recurso } from './../config/sequelize';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export var recurso_control = {
    findByLike: (req: Request, res: Response) => {
        let { palabra } = req.params;
        Recurso.findAll({
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
                    content: 'Error al encontrar recurso'
                })
            }
        })
    },
    getAll: (req: Request, res: Response) => {
        Recurso.findAll({
        }).then((recurso: any) => {
            if (recurso) {
                res.status(201).json({
                    message: 'Ok',
                    content: recurso
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer recursos'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    create: (req: Request, res: Response) => {
        Recurso.create(req.body).then((respuesta: any) => {
            if (respuesta) {
                res.status(201).json({
                    message: 'Ok',
                    content: respuesta
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al crear recurso'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    deleteById: (req: Request, res: Response) => {
        let { recurso_id } = req.params;
        Recurso.destroy( {
                where: {
                    recurso_id 
                }
            }).then((recurso: any) => {
                if (recurso) {
                    res.status(201).json({
                        message: 'Ok',
                        content: recurso
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al eliminar recurso'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
    },
    upDateById: (req: any, res: Response) => {

            let { recurso_id } = req.params;

            Recurso.update(req.body, {
                where: { 
                    recurso_id 
                }
            }).then((recurso: any) => {
                if (recurso) {
                    res.status(201).json({
                        message: 'Ok',
                        content: recurso
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al actualizar recurso'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
        



    },
    getById: (req: Request, res: Response) => {
        let { recurso_id } = req.params;
        Recurso.findAll({
            where: {
                recurso_id  
            }          
        }).then((recurso: any) => {
            if (recurso) {
                res.status(201).json({
                    message: 'Ok',
                    content: recurso
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer recurso'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    }

}