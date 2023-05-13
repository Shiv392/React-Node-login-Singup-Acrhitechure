const express=require('express');
const cors=require('cors');
const app=express();
const sequelize= require('./utils/db');
const port=8000;

app.use(express.json());
app.use(cors());

const UserRoutes=require('./routes/User.js');

app.use('/user',UserRoutes);

sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`server started on http://localhost:${port}`);
    })
}).catch(err=>{
    console.log(`could not start the server`,err);
})

