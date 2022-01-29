/*eslint-disable*/

import { equipo_model } from "../models/equipo";
import { intervencion_model } from "../models/intervencion";
import { recurso_model } from "../models/recurso";
import { registro_model } from "../models/registro";

const Sequelize = require('sequelize');

export const sequelize = new Sequelize('u317980564_dos','u317980564_dos','Tec8485.',{
    host:'sql408.main-hosting.eu',
    dialect:'mysql',
    timezone:'-05:00',
    // logging: console.log
});



export const Equipo:any = equipo_model(sequelize, Sequelize);
export const Intervencion:any = intervencion_model(sequelize, Sequelize);
export const Recurso:any = recurso_model(sequelize, Sequelize);
export const Registro:any = registro_model(sequelize, Sequelize);

// Recurso.hasMany(Intervencion,{foreignKey:'recurso_id'});

// Intervencion.hasMany(Registro,{foreignKey:'intervencion_id'});

// Equipo.hasMany(Intervencion,{foreignKey:'equipo_id'});

// Equipo.hasMany(Intervencion,{foreignKey:'equipo_id'});

Registro.hasMany(Intervencion,{foreignKey:'registro_id'});

Intervencion.hasMany(Recurso,{foreignKey: 'intervencion_id'})

Intervencion.hasMany(Equipo,{foreignKey: 'intervencion_id'})










