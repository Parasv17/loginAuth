const User = require("../models/User");
const bcrypt = require("bcryptjs");
const e = require("express");
const jwt = require("jsonwebtoken");


const signup = async (req,res)=>{
    console.log("hit the signup by post");
     const{username, password, email}= req.body;
     try{
        const userExist= await User.findOne({email:email})
        if(userExist){
           return  res.status(201).json({message:"User already exist"})
        }
        const hashPass= await bcrypt.hash(password,12);
        const newUser= await User.create({username:username, password:hashPass, email:email})

        const token= jwt.sign({email:newUser.email, id:newUser._id}, "choremagluke", {expiresIn:"1h"})

        res.status(200).json({result:newUser, token:token})




     }
     catch{
        console.log("error in signup")
        res.status(500).json({message:"Something went wrong"})
     }

}

const login =async (req,res)=>{
    console.log("login hit")

    const {username, password}= req.body;

    try{
        const validOrnot = await User.findOne({username:username});
        if( !validOrnot){
            return res.status(202).json({message:"Username not found"})
        }
        // res.send(validOrnot);
        const isPasswordCorrect= await bcrypt.compare(password, validOrnot.password);
        // res.send(isPasswordCorrect);
        if(!isPasswordCorrect){
            return res.status(201).json({message:"Password not correct! Try Again"})
        }
        const token= jwt.sign({email:validOrnot.email, id:validOrnot._id}, "choremagluke", {expiresIn:"1h"})
        res.status(200).json({result:validOrnot,token:token})
    }
    catch{
        // console.log();
        res.status(500).json({message:"Something went wrong"})
    }

}

module.exports= {login, signup}