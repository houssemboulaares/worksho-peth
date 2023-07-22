const mongoose=require('mongoose')
const User = require('../models/userShecma')
const { json } = require('express')
const bcrypt = require('bcrypt');
var jwt= require('jsonwebtoken')

const userController={
    get:async(req,ress)=>{
        const user=await User.find()
        ress.send(user)
    },
    add:async(req,res)=>{
        await User.create(req.body)
        res.send("add")
    },
    update:async(req,res)=>{
        await User.findOneAndUpdate({})
    },
    delete:async(req,res)=>{
        await User.findOneAndRemove({})
    },
    register:async(req,res)=>{


        const {email,password,passwordconfirme}=req.body
        const salt = bcrypt.genSaltSync(10);

        const hash = bcrypt.hashSync(password, salt);

        if(!email||!password||!passwordconfirme)
        return res.status(400).json({message:'missed information'}) 


        const user = await User.findOne({email:email})

        if (user)
        return  res.status(400).json({massage:"user already created"})


        if(password.localeCompare(passwordconfirme)!=0)
        return res.status(400).json({message:"password not confirmed"})

        
    
        const newuser=await User.create({email:email,password:hash})





        if (!newuser)
        return res.status(400).json({message:'user not created'})

         
        return res.status(200).json({_id:newuser._id,email:newuser.email,token:genToken(newuser._id)})

      
    }


}
const genToken =(id)=>{
return jwt.sign({_id:id},'12345')
}
module.exports=userController