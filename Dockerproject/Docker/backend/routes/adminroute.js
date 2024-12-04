import { json, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { verifyToken } from "../middleware/auth.js";

import dotenv from "dotenv";
dotenv.config()
const route=Router();
const secretkey = process.env.Secretkey;

//define User Schema
const userSchema = new mongoose.Schema(
    {
    username:{type:String,unique:true},
    mobileno:String,
    password:String,
    userType:String
    })
mongoose.connect('mongodb://mongodb:27017/PROJECT')

//create Model
const  User = mongoose.model('Userdetails',userSchema);

//define car adding Schema
const AddingSchema= new mongoose.Schema({
    carid:String,
    carname:String,
    carnumber:{type:String,unique:true},
    carrent:String,
    year:String,  
    transmission:String,
    available: { type: Boolean, default: true }

  })
  //create model
  const Adding = mongoose.model('Cardetails',AddingSchema);
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
  
 const  Booking = mongoose.model('Bookingdetails',BookingSchema);
  //define mess Schema
  const messSchema = new mongoose.Schema(
    {
    username:String,
    mobileno:String,
    emailid:String,
    message:String,
    })

//create Model
const  Message = mongoose.model('Usermessages',messSchema);
//signup part
route.post("/register", async (req, res) => {
  const userDetails = req.body;
  const { username,number, password } = userDetails;
  const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const found = await User.findOne({userType:'admin'});
      let userType='user';
      if(!found){
        userType='admin';
      }
    const result =await User.findOne({username:username})
    if(result){
      res.status(400).json({message:"username already exist"})
    }else{
      const user = new User({ username, password: hashedPassword, number, userType });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
      
    } catch (error) {
      console.log("err", error);
      res.status(500).json({ error: "Registration failed" });
    }
    });
//  login part
 route.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username, password);
      const user = await User.findOne({ username });
      console.log(user, "user");
      if (!user) {
        return res.status(401).json({ error: "Authentication failed- User doesn't exists" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Authentication failed- password doesn't match" });
      }
      const token = jwt.sign(
        { username: user.username, userType: user.userType },"your-secret-key",{expiresIn: "1h",}
      );
      res.cookie("Authtoken", token);
      res.json({status: true,message: "login success",userType: user.userType});
      //  console.log('/login in the bakend res', res)
      return res;
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Login failed" });
    }
  });
  
// add car
route.post('/caradding',verifyToken ,async(req,res)=>{
    // try{
      const data = req.body;
     const {carid,carname,carnumber,carrent,year,transmission}= data;
     const role =req.userType;
     if(role!== "admin"){
        return res.status(403).json({ message: "You have no permission" });
      // res.status(204).json("you have no permission")
      // console.log("it not working")
      }else{
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
            }
  })

  
////////////////////////////////////////////////////////
// Route to view bookings of the authenticated user
route.get('/viewbookings',  async (req, res) => {
  try {
      const username = req.user.username; // Extracted from JWT payload
      const userBookings = await Booking.find({ username }); // Filter by username
      if (userBookings.length === 0) {
          return res.status(404).json({ message: 'No bookings found for this user' });
      }
      return res.status(200).json(userBookings);
  } catch (error) {
      console.error('Error fetching bookings:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
});

  //view all booking list
  route.get('/viewbookinglist',verifyToken, async(req,res)=>{
    const role =req.userType;
        try {
            if(role!== "admin"){
                return res.status(403).json({ message: "You have no permission" });
            }else{
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
                }
        } catch (error) {
        console.error("Error fetching all booking:", error);
        res.status(500).json({ message: "Internal server error" });
        }
    })
//view all car list
route.get('/listofcar', async(req,res)=>{
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
//view all messages
    route.get('/messages',verifyToken, async(req,res)=>{
        // try {
          const role =req.userType;
        // Fetch all car from MongoDB
        if(role!== "admin"){
            return res.status(403).json({ message: "You have no permission" });
          // res.status(204).json("you have no permission")
          }else{
        const allmessages = await Message.find({});
                if (allmessages.length > 0) 
                    {
                    console.log("All message data found:");
                    console.log(allmessages);
                    res.status(200).json(allmessages);  // Send all message data as JSON
                    } else {
                    console.log("No message found.");
                    res.status(404).json({ message: 'No message found' });
                    }}
        // } catch (error) {
        // console.error("Error fetching all Message:", error);
        // res.status(500).json({ message: "Internal server error" });
        // }
    })

    //user renting car
    route.post('/renting', async (req, res) => {
      try {
          const data = req.body;
          const { username, firstname, lastname, mobileno, address, emailid, carname, carnumber, pickup, destination, pickupdate, pickuptime, returndate, returntime } = data;
          console.log(username, firstname, lastname, mobileno, address, emailid);
  
          // Check if the car exists in the Adding collection
          const checkcar = await Adding.findOne({ carnumber: carnumber });
          console.log(checkcar, "car in the collection of Adding");
  
          if (checkcar) {
              // Check if the car is already booked
              const existbooking = await Booking.findOne({ carnumber: carnumber });
              console.log(existbooking, "car in the collection of Booking");
  
              if (existbooking) {
                  return res.status(400).json({ message: "Car is not available" });
              }
  
              // Create a new booking
              const newbooking = new Booking({
                  username,
                  firstname,
                  lastname,
                  address,
                  mobileno,
                  emailid,
                  carname,
                  carnumber,
                  pickup,
                  destination,
                  pickupdate,
                  pickuptime,
                  returndate,
                  returntime,
              });
  
              await newbooking.save();
  
              // Mark the car as unavailable
              checkcar.available = false;
              await checkcar.save();
  
              console.log("Car rented and marked as unavailable successfully");
              return res.status(201).json({ message: "Car rented successfully and removed from the available list" });
          } else {
              return res.status(404).json({ message: "No car with this number found" });
          }
      } catch (error) {
          console.error("Error in renting the car:", error);
          return res.status(500).json({ message: "Internal server error" });
      }
  });

  //to fetch the car details
        route.get("/rentpage/:carnumber", async (req, res) => {
        const carnumber = req.params.carnumber;
        const checkcar= await Adding.findOne({carnumber:carnumber})
        console.log(checkcar)
        res.json(checkcar);
      });
      //view booking user
      route.get('/viewbookinguser', async(req,res)=>{
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
    //for the user sending message 
     route.post('/message',async(req,res)=>{
            // try{
              const data = req.body;
             const {username,mobileno,emailid,message}= data;
              const loggeduser =data.username;
              console.log(loggeduser)
              const checkuser =await User.findOne({username:loggeduser})
                      if(!checkuser){
          
                      res.status(403).json("you have to signup for sending Messages")
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
                        // }
                        // catch(error){
                        //   console.log(error)
                        // }
          })  
// DELETE route to remove a message by ID
route.delete('/messages/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Attempt to delete the message from the database
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.status(201).json({ success: true, message: 'Message deleted successfully', data: deletedMessage });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
//delete car 
route.delete("/deletecar/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Adding.findOneAndDelete({_id:id} );
    console.log(result)
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.send("car deleted successfully");
  } catch (error) {
    res.status(500).send("error deleting data");
  }
});
//getting details for updating
route.get('/getcar/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Adding.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json({ car: {
      carid: car.carid,
      carname: car.carname,
      carrent: car.carrent,
      transmission: car.transmission,
      year: car.year,
      carnumber: car.carnumber,
      available: car.available, // Include the availability field
    } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
//updating car
route.put('/updatecar/:id', async (req, res) => {
  console.log("Reached Update Route");
  try {
    console.log("Incoming Data:", req.body);
    console.log("Car ID:", req.params.id);
    const { carname, carrent, transmission, year, carnumber, available } = req.body;

    // Update the car in the Adding collection
    const updatedCar = await Adding.findByIdAndUpdate(
      req.params.id,
      { carname, carrent, transmission, year, carnumber, available },
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    console.log("Updated Car:", updatedCar);

    // If the car is unavailable, remove it from the Booking collection
    console.log(available)
    if (available) {
      const deletedBooking = await Booking.findOneAndDelete({ carnumber:carnumber });
      if (deletedBooking) {
        console.log("Booking entry deleted:", deletedBooking);
      } else {
        console.log("No booking entry found for this car.");
      }
    }

    res.json({ message: 'Car updated successfully', car: updatedCar });

  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({ message: 'Server error' });
  }
});






export{route};