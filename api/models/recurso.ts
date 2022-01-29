// RECURSO MODEL
/*eslint-disable*/

// import { Sequelize } from 'sequelize';
// const Sequelize = require('sequelize');
import {Sequelize} from 'sequelize';

export var recurso_model = (sequel: Sequelize, type: any) => {
    var recurso_model = sequel.define('t_recurso',
        {
            recurso_id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            descripcion_recur: {
                type: type.STRING(200),
                allowNull: false,
            },            
        },
        {
            timestamps: false,
            tableName: 't_recurso'
        });



    return recurso_model;
}