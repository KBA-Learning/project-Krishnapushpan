import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCar = () => {
  const { id } = useParams();
  console.log(id,"try");
  
  const navigate = useNavigate();
  const [car, setCar] = useState({
    carid: '',
    carname: '',
    carrent: '',
    transmission: '',
    year: '',
    carnumber: '',
    available: false, // Initially set to false
    image: null, // Field for image
  });

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`/api/getcar/${id}`, {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data,"try");
        setCar((prevCar) => ({
          ...prevCar,
          carid: data.car.carid || '',
          carname: data.car.carname || '',
          carrent: data.car.carrent || '',
          transmission: data.car.transmission || '',
          year: data.car.year || '',
          carnumber: data.car.carnumber || '',
          available: data.car.available || false, // Set the availability value
        }));
        
      } catch (error) {
        console.error('Error fetching car details:', error.message);
        alert('Failed to fetch car details. Please try again.');
      }

      
    };

    fetchCarDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the data as a plain JSON object
    const updatedCarDetails = {
      carname: car.carname,
      carrent: car.carrent,
      transmission: car.transmission,
      year: car.year,
      carnumber: car.carnumber,
      available: car.available,
    };
  
    console.log(updatedCarDetails, "Car details being sent");
  
    try {
      console.log(id, "Car ID being updated");
  
      const response = await fetch(`/api/updatecar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Set header for JSON payload
        },
        credentials: 'include', // Include credentials if needed
        body: JSON.stringify(updatedCarDetails), // Send JSON data
      });
  
      if (response.ok) {
        alert('Car updated successfully!');
        navigate('/cars');
      } else {
        const data = await response.json();
        console.log(data, "Error response data from server");
        alert(data.message || 'Failed to update car');
      }
    } catch (error) {
      console.error('Error updating car:', error.message);
      alert('An error occurred while updating the car.');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      available: value === 'available', // Set available to true or false
    }));
  };

  return (
    <div className="w-full mx-auto bg-[#b2d0ec] p-6 ">
      <div className="px-[10px] py-[10px]">
        <form onSubmit={handleSubmit}>
          <div className="mx-auto bg-white w-[800px] p-8 rounded-lg">
            <p className="font-bold text-[#003066] text-3xl text-center mb-6">Edit Car</p>
            <div className="flex flex-wrap gap-8">
              {/* First Column */}
              <div className="ml-[50px]">
                {/* Car ID */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Car ID</label>
                  <input
                    className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-[#003066] placeholder:text-sm"
                    type="text"
                    placeholder="Enter the Car ID"
                    name="carid"
                    value={car.carid}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Car Number */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Car Number</label>
                  <input
                    className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
                    type="text"
                    placeholder="Enter the Car Number"
                    name="carnumber"
                    value={car.carnumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Car Name */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Car Name</label>
                  <select
                    className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
                    name="carname"
                    value={car.carname}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Car</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Honda">Honda</option>
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
                    className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
                    type="text"
                    placeholder="Enter the Rent Price"
                    name="carrent"
                    value={car.carrent}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Second Column */}
              <div className="ml-[20px]">
                {/* Year */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Year</label>
                  <input
                    className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
                    type="text"
                    placeholder="Enter the Manufacturing Year"
                    name="year"
                    value={car.year}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Transmission */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Transmission</label>
                  <input
                    className="w-full rounded-md bg-gray-200 h-8 px-3 border border-white placeholder:text-sm"
                    type="text"
                    placeholder="Enter the Transmission Type"
                    name="transmission"
                    value={car.transmission}
                    onChange={handleChange}
                  />
                </div>

                {/* Radio Buttons for Availability */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Availability</label>
                  <div className="flex items-center">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="available"
                        value="available"
                        checked={car.available === true}
                        onChange={handleAvailabilityChange}
                      />
                      Available
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="available"
                        value="notAvailable"
                        checked={car.available === false}
                        onChange={handleAvailabilityChange}
                      />
                      Not Available
                    </label>
                  </div>
                </div>

                {/* Upload Image */}
                <div className="mb-4">
                  <label className="block text-[#003066] text-base mb-2">Upload Image</label>
                  <input
                    type="file"
                    className="w-full bg-gray-200 rounded-md h-10 px-3 border border-white placeholder:text-sm"
                    onChange={(e) => setCar({ ...car, image: e.target.files[0] })}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full h-12 font-bold text-white text-lg rounded-lg bg-[#003066] hover:bg-blue-700 transition-colors"
              type="submit"
            >
              Update Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
