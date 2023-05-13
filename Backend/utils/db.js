const Sequelize = require('sequelize');
require('dotenv').config()
const sequelize= new Sequelize('ReactLoginSingup','root','Shiv@3923',{
    host:'localhost',
    dialect:'mysql'
})
module.exports=sequelize;