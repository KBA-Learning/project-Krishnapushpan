import React, { useState } from 'react';
import rentback from '../assets/images/2.jpg';
import { useLoaderData,useNavigate} from 'react-router-dom'
import getUserType from '../Utils/Auth';
// import NotFound from './NotFound';

const Rent = () => {
  const cardetails=useLoaderData();
  const userType = getUserType();
  const navigate=useNavigate();
  const[username,setUsername]=useState('');
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[address,setAddress]=useState('');
  const[mobileno,setMobileno]=useState('');
  const[emailid,setEmailid]=useState('');
  const[carname,setCarname]=useState(cardetails.carname);
  const[carnumber,setCarnumber]=useState(cardetails.carnumber); 
  const[pickup,setPickup]=useState('');
  const[destination,setDestination]=useState('');
  const[pickupdate,setPickupdate]=useState('');
  const[pickuptime,setPickuptime]=useState('');
  const[returndate,setReturndate]=useState('');
  const[returntime,setReturntime]=useState('');

  const rentSubmit =async(rentdetails)=>{
    const res =await fetch(`/api/renting`,{
      method:'POST',
      headers:{'Content-Type':'application/json',},
      body:JSON.stringify(rentdetails),
    });
    if(res.status === 201){
      alert('Car Rented Successfully');
      navigate('/cars');
    }
    // else{
    //   alert('Failed to Rent Car');
    // }
  }
  const submitForm = (e) =>{
    e.preventDefault();
    const Cardetails={
      username,firstname,lastname,mobileno,address,emailid,carname,carnumber,pickup,destination,pickupdate,pickuptime,returndate,returntime
    }
    rentSubmit(Cardetails);
   }


   
  return (
    <div className="bg-cover " style={{ backgroundImage: `url(${rentback})` }}>
      <form action="" onSubmit={submitForm}>
      <div className="pb-[30px] pt-[30px] flex justify-center items-center">
        <div className="bg-white/30 lg:w-[850px] p-8 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row gap-8 space-x-4"> {/* space-x-4 added here */}
            {/* Left Side: User Details */}
            <div className="w-full lg:w-1/2 space-y-4">
              <p className="text-3xl font-bold text-white pb-4">Car Booking Form</p>
              <label className="text-white font-semibold">UserName</label>
              <input
                className="  p-3 w-full h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text" placeholder="Enter your UserName"    
                value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <label className="text-white font-semibold mt-8">First Name</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter your First Name"
                value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              />
              
              <label className="text-white font-semibold">Last Name</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter your Last Name"
                value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              />
              
              <label className="text-white font-semibold">Address</label>
              <textarea
                className="w-full p-3 mt-2 rounded-md placeholder:text-sm  border border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Address"
                value={address}
              onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              
              <label className="text-white font-semibold">Mobile No</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter your Mobile No"
                value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
              />
              
              <label className="text-white font-semibold">Email Id</label>
              <input
                className="w-full p-3 mt-2 h-[35px] vplaceholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your Email ID"
                value={emailid}
              onChange={(e) => setEmailid(e.target.value)}
              />
            </div>

            {/* Right Side: Car Details */}
            <div className="w-full lg:w-1/2 space-y-4">
              <p className="text-3xl font-bold text-white pb-4 ">Car Details</p>
              
              <label className="text-white font-semibold">Car Name</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Car Name"
                value={cardetails.carname}
                onChange={(e) => setCarname(e.target.value)}
              />
              
              <label className="text-white font-semibold">Car Number</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Car Number"
                value={cardetails.carnumber}
                onChange={(e) => setCarnumber(e.target.value)}
              />
              
              <label className="text-white font-semibold">Pickup Location</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Pickup Location"
                value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              />
              
              <label className="text-white font-semibold">Destination</label>
              <input
                className="w-full p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Destination"
                value={destination}
              onChange={(e) => setDestination(e.target.value)}
              />
              
              <label className="text-white font-semibold ">Pickup Date & Time</label>
              <div className="flex space-x-4">
                <input
                  className="w-1/2 p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  type="date"
                  value={pickupdate}
              onChange={(e) => setPickupdate(e.target.value)}
                />
                <input
                  className="w-1/2 p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  type="time"
                  value={pickuptime}
              onChange={(e) => setPickuptime(e.target.value)}
                />
              </div>
              
              <label className="text-white font-semibold">Return Date & Time</label>
              <div className="flex space-x-4">
                <input
                  className="w-1/2 p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  type="date"
                  value={returndate}
              onChange={(e) => setReturndate(e.target.value)}
                />
                <input
                  className="w-1/2 p-3 mt-2 h-[35px] placeholder:text-sm  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  type="time"
                  value={returntime}
              onChange={(e) => setReturntime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex h-[40px] justify-center mt-6">
            <button className="w-full sm:w-[500px]  text-xl font-semibold text-white bg-[#003066] rounded-md hover:bg-[#003066]/60 transition duration-300">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};
const rentLoader = async ({params}) =>{
  const res= await fetch(`/api/rentpage/${params.carnumber}`,{
     method: 'GET',
    // credentials:'include'
  });
  if(!res.ok){
    throw new Response("car not found",{status:404})
  }else{
    return res.json();
  }
  
}


export { Rent as default,rentLoader}
