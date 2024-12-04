import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgback from '../assets/images/cartry.jpg'

const AddCar = () => {
  const [carid, setCarid] = useState('');
  const [carnumber, setCarnumber] = useState('');
  const [carname, setCarname] = useState('Hyundai');
  const [carrent, setCarrent] = useState('');
  const [year, setYear] = useState('');
  const [transmission, setTransmission] = useState('');
  const navigate = useNavigate();

  const carSubmit = async (cardetails) => {
    const res = await fetch(`/api/caradding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardetails),
    });
    if (res.status === 201) {
      alert('Car added successfully');
      window.location.reload();
    } else if (res.status === 403) {
      alert('Username is not the same as you logged in');
    } else {
      alert('Car not added');
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const cardetails = {
      carid,
      carname,
      carnumber,
      carrent,
      year,
      transmission,
    };
    carSubmit(cardetails);
  };

  return (
    <>
    <div className='bg-cover bg-[#b2d0ec]' 
    // style={{backgroundImage:`url(${imgback})`}}
    >
    <div className='px-[20px] py-[20px]' >
    <form action="" onSubmit={submitForm}>
    
        <div className=" mx-auto bg-white w-[800px] p-8 rounded-lg">
        <p className="font-bold text-[#003066] text-3xl text-center mb-6">ADD CARS</p>
<div className='flex flex-grid-2 gap-8'>
  {/* first div  starting*/}
  <div className='ml-[50px]'>
            {/* Car ID */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Car ID</label>
            <input
              className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
              type="text"
              placeholder="Enter the ID"
              value={carid}
              onChange={(e) => setCarid(e.target.value)}
            />
          </div>

          {/* Car Number */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Car Number</label>
            <input
              className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
              type="text"
              placeholder="Enter the Number"
              value={carnumber}
              onChange={(e) => setCarnumber(e.target.value)}
            />
          </div>

          {/* Car Name */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Car Name</label>
            <select
              className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white bg-white placeholder:text-sm"
              value={carname}
              onChange={(e) => setCarname(e.target.value)}
            >
              <option value="Hyundai">Hyundai</option>
              <option value="Honda">Honda</option>
              <option value="Honda City">Honda City</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Maruti Suzuki">Maruti Suzuki</option>
              <option value="Tata">Tata</option>
            </select>
          </div>

          {/* Car Rent */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Car Rent</label>
            <input
              className="w-full bg-gray-200 rounded-md h-8 px-3 border border-white placeholder:text-sm"
              type="text"
              placeholder="Enter the price"
              value={carrent}
              onChange={(e) => setCarrent(e.target.value)}
            />
          </div>

          </div>
          {/* first div  ending*/}
            {/* second  div  ending*/}
          <div className='ml-[20px]'> 
            {/* Year */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Year</label>
            <input
              className="w-full bg-gray-200 rounded-md h-8 px-3 border border-white placeholder:text-sm"
              type="text"
              placeholder="Enter the Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          {/* Transmission */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Transmission</label>
            <input
              className="w-full bg-gray-200 rounded-md h-8 px-3 border border-white placeholder:text-sm"
              type="text"
              placeholder="Enter the Transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
            />
          </div>

          {/* Upload Image */}
          <div className="mb-4">
            <label className="block text-[#003066] text-base mb-2">Upload Image</label>
            <input
              type="file"
              className="w-full bg-gray-200 rounded-md h-10 p-2 border border-white placeholder:text-sm"
            />
          </div>
          </div>
           {/* second  div  ending*/}
</div>
          {/* Submit Button */}
          <button
            className="w-full h-12 font-bold text-white text-lg rounded-lg bg-[#003066] hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddCar;
