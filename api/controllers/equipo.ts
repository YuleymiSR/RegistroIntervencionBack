// equipo CONTROLLERS

/*eslint-disable*/

import { Request, Response } from 'express';
import { Equipo } from './../config/sequelize';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export var equipo_control = {
    findByLike: (req: Request, res: Response) => {
        let { palabra } = req.params;
        Equipo.findAll({
            where: {
                nombre_eq: {
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
                    content: 'Error al encontrar equipo'
                })
            }
        })
    },
    getAll: (req: Request, res: Response) => {
        Equipo.findAll({
        }).then((equipo: any) => {
            if (equipo) {
                res.status(201).json({
                    message: 'Ok',
                    content: equipo
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer equipos'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    create: (req: Request, res: Response) => {
        Equipo.create(req.body).then((respuesta: any) => {
            if (respuesta) {
                res.status(201).json({
                    message: 'Ok',
                    content: respuesta
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al crear equipo'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    },
    deleteById: (req: Request, res: Response) => {
        let { equipo_id } = req.params;
        Equipo.destroy({
                where: {
                    equipo_id
                }
            }).then((equipo: any) => {
                if (equipo) {
                    res.status(201).json({
                        message: 'Ok',
                        content: equipo
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al eliminar equipo'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
    },
    upDateById: (req: any, res: Response) => {

            let { equipo_id } = req.params;


            Equipo.update(req.body, {
                where: { equipo_id }
            }
            ).then((equipo: any) => {
                if (equipo) {
                    res.status(201).json({
                        message: 'Ok',
                        content: equipo
                    });
                } else {
                    res.status(400).json({
                        message: 'Error',
                        content: 'Error al actualizar equipo'
                    });
                }
            }).catch((error: any) => {
                console.log("Error => " + error);
            });
        



    },
    getById: (req: Request, res: Response) => {
        let { equipo_id } = req.params;
        Equipo.findAll({
            where: {
                equipo_id 
            }
        }).then((equipo: any) => {
            if (equipo) {
                res.status(201).json({
                    message: 'Ok',
                    content: equipo
                });
            } else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer equipo'
                });
            }
        }).catch((error: any) => {
            console.log("Error => " + error);
        });
    }

}