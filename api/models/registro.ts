// REGISTRO MODEL
/*eslint-disable*/

import { Sequelize } from 'sequelize';

export var registro_model = (sequelize: Sequelize, type: any) => {
    var registro_model = sequelize.define('t_registro',
        {
            registro_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            fecha_reg: {
                type: type.STRING(20),
                allowNull: false,
            },
            coment_reg: {
                type: type.STRING(550),
                allowNull: false,
            },            
        },
        {
            timestamps: false,
            tableName: 't_registro'
        });

    return registro_model;

}