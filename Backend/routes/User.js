const express= require('express');
const routes=express.Router();
const UserController= require('../controllers/User.js');

routes.post('/signup',UserController.SingupUser);
routes.post('/login',UserController.LoginUser);
routes.get('/alluser',UserController.getAllUser);

module.exports=routes;