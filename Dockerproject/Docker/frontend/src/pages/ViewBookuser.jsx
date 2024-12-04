import React, { useState, useEffect } from 'react';

const ViewBookuser = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const username = localStorage.getItem('username'); // Get username from localStorage

      if (!username) {
        console.error("Username not found in localStorage");
        return;
      }

      try {
        const response = await fetch(`/api/viewbookinguser?username=${username}`, { // Pass username as a query parameter
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching reservations');
        }

        const data = await response.json();
        setBookings(data); // Update the state with fetched booking data
        console.log(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl text-[#003066] font-bold text-center mb-6">Your Bookings</h2>
      <div className="  grid-cols-3 gap-6">
        {bookings && bookings.length > 0 ?(
          bookings.map((booking) => (
            <div key={booking._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-4xl mx-auto">
            {/* <h3 className="text-2xl font-bold text-[#003066] mb-6 text-center">{booking.username}</h3> */}

  {/* Container for all sections */}
  <div className="grid grid-cols-3 gap-6">
    {/* Section 1: Personal Information */}
    <div className="border rounded-lg p-4">
      <div className='p-2 bg-blue-100 rounded-lg'><h4 className="text-xl font-semibold text-[#003066] mb-3">Personal Details</h4></div>
      <p className="text-[#003066]">
        <span className="font-semibold">Firstname:</span> {booking.firstname}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Lastname:</span> {booking.lastname}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Address:</span> {booking.address}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Mobile No:</span> {booking.mobileno}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Email Id:</span> {booking.emailid}
      </p>
    </div>

    {/* Section 2: Car Details */}
    <div className="border rounded-lg p-4">
    <div className='p-2 bg-blue-100 rounded-lg'><h4 className="text-xl font-semibold text-[#003066] mb-3">Car Details</h4></div>
      <p className="text-[#003066]">
        <span className="font-semibold">Car Name:</span> {booking.carname}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Car Number:</span> {booking.carnumber}
      </p>
    </div>

    {/* Section 3: Trip Details */}
    <div className="border rounded-lg p-4">
    <div className='p-2 bg-blue-100 rounded-lg'><h4 className="text-xl font-semibold text-[#003066] mb-3">Trip Details</h4></div>
      <p className="text-[#003066]">
        <span className="font-semibold">Pickup Location:</span> {booking.pickup}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Destination:</span> {booking.destination}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Pickup Date:</span> {booking.pickupdate}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Pickup Time:</span> {booking.pickuptime}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Return Date:</span> {booking.returndate}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Return Time:</span> {booking.returntime}
      </p>
    </div>
  </div>
</div>

          ))
        ) : (
          <p className="text-center text-gray-500 p-24 ">No Booking found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewBookuser;
