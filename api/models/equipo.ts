// EQUIPO MODEL
/*eslint-disable*/

import { Sequelize } from 'sequelize';

export var equipo_model = (sequelize: Sequelize, type: any) => {
    var equipo_model = sequelize.define('t_equipo',
        {
            equipo_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nombre_eq: {
                type: type. STRING(80),
                allowNull: false,
            }           
        },
        {
            timestamps: false,
            tableName: 't_equipo'
        });

    return equipo_model;

}