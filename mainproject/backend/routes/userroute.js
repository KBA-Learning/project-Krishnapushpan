import { json, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { Adding } from './adminroute.js';
import dotenv from "dotenv";
dotenv.config()
const userroute=Router();
const secretkey = process.env.Secretkey;

//define User Schema
const userSchema = new mongoose.Schema(
    {
    username:{type:String,unique:true},
    mobileno:String,
    password:String,
    })
mongoose.connect('mongodb://localhost:27017/CARRENT')

//create Model
const  User = mongoose.model('Userdetails',userSchema);

const BookingSchema= new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    address:String,
    mobileno:String,
    emailid:String,  
    carname:String,
    carnumber:String,
    pickup:String,
    destination:String,
    pickupdate:String,
    pickuptime:String,
    returndate:String,
    returntime:String
  })
  //create model
  
  export const  Booking = mongoose.model('Bookingdetails',BookingSchema);
  //define mess Schema
  const messSchema = new mongoose.Schema(
    {
    username:String,
    mobileno:String,
    emailid:String,
    message:String,
    })

//create Model
export const  Message = mongoose.model('Usermessages',messSchema);

 
    userroute.post('/signup',async(req,res)=>{
    try{

    const data =req.body;
  
    const {username,mobileno,password}=data;
    console.log("signup details");
    
    const newp = await bcrypt.hash(password,10)
    const existingUser= await User.findOne({username:username})
    if(existingUser){
        res.status(400).json({message:"username already saved"}) 
    }
    else{

      const newUser= new User({
        username:username,
        mobileno:mobileno,
        password:newp,
      })
      await newUser.save(); 
       console.log("signup successfully")
        res.status(201).json({message:"data saved"})
    }}
    catch(error){
        res.status(500).json(error);
    }
})  
// login part
userroute.post('/login',async(req,res)=>{
    const{username,password}=req.body;
    console.log("login details");
    const result= await User.findOne({username:username})
    // console.log(result);
    if(!result){
        res.status(404).json("user not found")
    }
    else{
      console.log(password)
      console.log(result.password)
        const isvalid =await bcrypt.compare(password,result.password)
        // console.log(isvalid);
        if(isvalid){
        const token = await jwt.sign({username:username},secretkey,{expiresIn:'1h'})
        res.cookie('asuser',token,{httpOnly:true});
        res.status(200).json({token});
        console.log("login successfully")
        }  
    }
    })
    // add course
    userroute.post('/renting',async(req,res)=>{
    // try{
      const data = req.body;
     const {username,firstname,lastname,mobileno,address,emailid,carname,carnumber,pickup,destination,pickupdate,pickuptime,returndate,returntime}= data;
    const checkcar= await Adding.findOne({carnumber:carnumber})
        if(checkcar){
          const existbooking= await Booking.findOne({carnumber:carnumber})
          if(existbooking){
            res.status(400).json({message:"car is not available"}) 
        }
          else{ 
            const newbooking= new Booking({
                username:username,
                firstname:firstname,
                lastname:lastname,
                address:address,
                mobileno:mobileno,
                emailid:emailid,  
                carname:carname,
                carnumber:carnumber,
                pickup:pickup,
                destination:destination,
                pickupdate:pickupdate,
                pickuptime:pickuptime,
                returndate:returndate,
                returntime:returntime
            })
            await newbooking.save(); 
            console.log("car rented successfully")
              res.status(201).json({message:"car rented successfully"})  
          }
        }
        else{
          res.send("there no car with this number")
        }
  })
  //viewcourse on click  of button
  userroute.get('/viewbooking', async(req,res)=>{

    try {
      const qusername = req.query.username;
      // Fetch all booking from MongoDB
      const userbooking = await Booking.find({username:qusername});
      
      if (userbooking.length > 0) {
          console.log("All userbooking data found:");
          console.log(userbooking);
          res.status(200).json(userbooking);  // Send all userbooking data as JSON
      } else {
          console.log("No booking found.");
          res.status(404).json({ message: 'No booking found' });
      }
    } catch (error) {
      console.error("Error fetching all booking:", error);
      res.status(500).json({ message: "Internal server error" });
    }
    
    
    })

 userroute.post('/message',async(req,res)=>{
        try{
          const data = req.body;
         const {username,mobileno,emailid,message}= data;
          const loggeduser =data.username;
          console.log(loggeduser)
          const checkuser =await User.findOne({username:loggeduser})
                  if(!checkuser){
      
                  res.send("you have to signup for sending Messages")
                  }
                  else{
                        const newmessage= new Message({
                            username:username,
                            mobileno:mobileno,
                            emailid:emailid,  
                            message:message,
                        })
                        await newmessage.save(); 
                        console.log("message send successfully ")
                        res.status(201).json({message:"message send  successfully"})  
                      }
                    }
                    catch(error){
                      console.log(error)
                    }
      })  
      userroute.get('/carlist', async(req,res)=>{
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
export {userroute};