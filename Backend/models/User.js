const Sequelize= require('sequelize');
const sequelize=require('../utils/db.js');

const User= sequelize.define('USER',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
    ,password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=User;