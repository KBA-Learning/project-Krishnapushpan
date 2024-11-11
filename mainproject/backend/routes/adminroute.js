import { json, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { authenticate } from "../middleware/auth.js";
import {Booking} from "./userroute.js";
import {Message} from "./userroute.js";
import dotenv from "dotenv";
dotenv.config()
const adminroute=Router();
const secretkey = process.env.Secretkey;
//define admin Schema
const adminSchema = new mongoose.Schema(
    {
    adminname:{type:String,unique:true},
    password:String,
    })
mongoose.connect('mongodb://localhost:27017/CARRENT')

//create Model
const  Admin = mongoose.model('Admindetails',adminSchema);

//define car adding Schema
const AddingSchema= new mongoose.Schema({
    carid:String,
    carname:String,
    carnumber:{type:String,unique:true},
    carrent:String,
    year:String,  
    transmission:String
  })
  //create model
  export const Adding = mongoose.model('Cardetails',AddingSchema);

//signup part
    adminroute.post('/adminsignup',async(req,res)=>{
        try{
    
        const data =req.body;
      
        const {adminname,password}=data;
        console.log("signup details");
        
        const newp = await bcrypt.hash(password,10)
        const existingadmin= await Admin.findOne({adminname:adminname})
        if(existingadmin){
            res.status(400).json({message:"adminname already saved"}) 
        }
        else{
    
          const newAdmin= new Admin({
            adminname:adminname,
            password:newp,
          })
          await newAdmin.save(); 
           console.log("signup successfully")
            res.status(201).json({message:"data saved"})
        }}
        catch(error){
            res.status(500).json(error);
        }
    })  
    // login part
    adminroute.post('/adminlogin',async(req,res)=>{
        const{adminname,password}=req.body;
        console.log("login details");
        const result= await Admin.findOne({adminname:adminname})
        // console.log(result);
        if(!result){
            res.status(404).json("admin not found")
        }
        else{
          console.log(password)
          console.log(result.password)
            const isvalid =await bcrypt.compare(password,result.password)
            // console.log(isvalid);
            if(isvalid){
            const token = await jwt.sign({adminname:adminname},secretkey,{expiresIn:'1h'})
            res.cookie('asadmin',token,{httpOnly:true});
            res.status(200).json({token});
            console.log("login successfully")
            }  
        }
        })
// add car
adminroute.post('/caradding',async(req,res)=>{
    // try{
      const data = req.body;
     const {carid,carname,carnumber,carrent,year,transmission}= data;
     
                const existcar= await Adding.findOne({carnumber:carnumber})
                if(existcar){
                    res.status(400).json({message:"car is already added"}) 
                }else{ 
                        const newcar= new Adding({
                        carid:carid,
                        carname:carname,
                        carnumber:carnumber,
                        carrent:carrent,
                        year:year,  
                        transmission:transmission
                    })
                    await newcar.save(); 
                    console.log("car added successfully")
                      res.status(201).json({message:"car added successfully"})  
                }
              
  })
  //view all booking list
  adminroute.get('/viewbookinglist', async(req,res)=>{
        try {
        // Fetch all booking from MongoDB
        const allbooking = await Booking.find({});
                if (allbooking.length > 0) 
                    {
                    console.log("All courses data found:");
                    console.log(allbooking);
                    res.status(200).json(allbooking);  // Send all booking data as JSON
                    } else {
                    console.log("No booking found.");
                    res.status(404).json({ message: 'No booking found' });
                    }
        } catch (error) {
        console.error("Error fetching all booking:", error);
        res.status(500).json({ message: "Internal server error" });
        }
    })
//view of  car list
    adminroute.get('/listofcar', async(req,res)=>{
        try {
        // Fetch all car from MongoDB
        const alladding = await Adding.find({});
                if (alladding.length > 0) 
                    {
                    console.log("All cars data found:");
                    console.log(alladding);
                    res.status(200).json(alladding);  // Send all cars data as JSON
                    } else {
                    console.log("No cars found.");
                    res.status(404).json({ message: 'No cars found' });
                    }
        } catch (error) {
        console.error("Error fetching all adding:", error);
        res.status(500).json({ message: "Internal server error" });
        }
    })

    adminroute.get('/messages', async(req,res)=>{
        try {
        // Fetch all car from MongoDB
        const allmessages = await Message.find({});
                if (allmessages.length > 0) 
                    {
                    console.log("All message data found:");
                    console.log(allmessages);
                    res.status(200).json(allmessages);  // Send all message data as JSON
                    } else {
                    console.log("No message found.");
                    res.status(404).json({ message: 'No message found' });
                    }
        } catch (error) {
        console.error("Error fetching all Message:", error);
        res.status(500).json({ message: "Internal server error" });
        }
    })

export{adminroute};