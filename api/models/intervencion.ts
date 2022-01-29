// INTERVENCION MODEL
/*eslint-disable*/

import { Sequelize } from 'sequelize';

export var intervencion_model = (sequelize: Sequelize, type: any) => {
    var intervencion_model = sequelize.define('t_intervencion',
        {
            intervencion_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre_inter: {
                type: type.STRING(180),
                allowNull: false,
            }
        },
        {
            timestamps: false,
            tableName: 't_intervencion'
        });

    return intervencion_model;

}