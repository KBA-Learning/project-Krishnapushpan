import React from 'react'

const Customer = () => {
  return (
    <div className="h-[500px]">
    <br/><br/>
    <div className="flex">
        <div className="w-[45%]  ml-12" >
            <p className="text-5xl text-white font-['Concert One'] font-bold ">We offer customers a wide range of commercial cars and luxury cars for any occasion.</p>
        </div>
        <div className="w-[45%] "><p className="text-[12px] text-white mt-[60px] text-balance">At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.</p></div>
    </div>
    <br/><br/>
    <div className="flex gap-20  ml-[200px]">
        <div className="h-[70px] w-[150px] bg-white rounded-md"><p className=" text-center text-2xl text-[#003066]">1000</p><p className="text-center text-[#003066] text-md">Completed Orders</p></div>
        <div className="h-[70px] w-[150px] bg-white rounded-md"><p className=" text-center text-2xl text-[#003066]">850</p><p className="text-center text-[#003066] text-md">Happy Customers</p></div>
        <div className="h-[70px] w-[150px] bg-white rounded-md"><p className=" text-center text-2xl text-[#003066]">134</p><p className="text-center text-[#003066] text-md">Vehicles Fleet</p></div>
        <div className="h-[70px] w-[150px] bg-white rounded-md"><p className=" text-center text-2xl text-[#003066]">2</p><p className="text-center text-[#003066] text-md">Years Experience</p></div>
    </div>
    <br/><br/>
   </div>
  )
}

export default Customer