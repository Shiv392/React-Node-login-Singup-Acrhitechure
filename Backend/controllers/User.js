const User= require('../models/User.js');
const bcrypt= require('bcrypt');

exports.SingupUser= async(req,res,next)=>{
   try{
      const {name,email,password}=req.body;
     const user= await User.findOne({where:{email:email}});
     if(!user){
      const saltround=10;
      const bpassword= await bcrypt.hash(password,saltround);
      User.create({
          name:name,
          email:email,
          password:bpassword
      }).then(user=>{
          res.status(201).json({success:true,message:'User Created',data:user})
      }).catch(err=>{
          res.status(500).json({success:false,message:'Something went wrong,please try again'})
      })
     }
     else{
      return res.json({success:false,message:'Email is already registered'})
     }
    }
     catch(err){
     return res.status(500).json({success:false,message:'something went wrong'})
     }
}

exports.LoginUser= async(req,res,next)=>{
  try{
    const {email,password} =req.body;
      let response= await User.findOne({where:{email:email}});
      if(!response){
        res.json({success:false,message:'user not found please singup'})
      }
      else{
      let compare= await bcrypt.compare(password,response.password);
      if(compare){
        return res.status(200).json({success:true,user:response,message:'login successfull'});
      }
      else{
        return res.json({success:false,message:'password donot match'});
      }
      }
    }
    catch(err){
        res.status(500).json({success:false,message:'something went wrong please try again'});
        console.log(err);
    }
    
}

exports.getAllUser= async(req,res,next)=>{
  try{
    let user= await User.findAll();
    res.status(200).json({success:true,message:'user list',data:user})
  }
  catch(err){
    res.status(500).json({success:false,message:'something went wrong please try again',data:err});
    console.log('getting all user',err);
  }
}
