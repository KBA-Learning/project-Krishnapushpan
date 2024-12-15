import React ,{useEffect,useState} from 'react'

const ViewBookadmin = () => {
    const [Bookings, setBookings] = useState([]);

    useEffect(() => {
      const fetchBookings = async () => {
        // const username = localStorage.getItem('username'); // Get username from localStorage
  
        // if (!username) {
        //   console.error("Username not found in localStorage");
        //   return;
        // }
  
        try {
          const response = await fetch(`/api/viewbookinglist`, { // Pass username as a query parameter
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
        <h2 className="text-2xl font-bold text-center mb-6">ALL BOOKINGS</h2>
        <div className="grid-cols-2 gap-6">
          
          {Bookings && Bookings.length > 0 ? (
            Bookings.map((Booking) => (
              
              <div
  key={Booking._id}
  className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 max-w-4xl mx-auto"
><h3 className="text-xl font-bold text-[#003066] pb-4 text-center">{Booking.username}</h3>
  {/* Container for all sections */}
  <div className="grid grid-cols-3 gap-6">
    {/* Section 1: Personal Information */}
    <div className="border rounded-lg p-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <h4 className="text-xl font-semibold text-[#003066] mb-3">Personal Details</h4>
      </div>
      <p className="text-[#003066]">
        <span className="font-semibold">Firstname:</span> {Booking.firstname}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Lastname:</span> {Booking.lastname}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Address:</span> {Booking.address}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Mobile No:</span> {Booking.mobileno}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Email Id:</span> {Booking.emailid}
      </p>
    </div>

    {/* Section 2: Car Details */}
    <div className="border rounded-lg p-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <h4 className="text-xl font-semibold text-[#003066] mb-3">Car Details</h4>
      </div>
      <p className="text-[#003066]">
        <span className="font-semibold">Car Name:</span> {Booking.carname}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Car Number:</span> {Booking.carnumber}
      </p>
    </div>

    {/* Section 3: Trip Details */}
    <div className="border rounded-lg p-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <h4 className="text-xl font-semibold text-[#003066] mb-3">Trip Details</h4>
      </div>
      <p className="text-[#003066]">
        <span className="font-semibold">Pickup Location:</span> {Booking.pickup}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Destination:</span> {Booking.destination}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Pickup Date:</span> {Booking.pickupdate}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Pickup Time:</span> {Booking.pickuptime}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Return Date:</span> {Booking.returndate}
      </p>
      <p className="text-[#003066]">
        <span className="font-semibold">Return Time:</span> {Booking.returntime}
      </p>
    </div>
  </div>
</div>



            
            ))
          ) : (
            <div  className="col-span-full text-center text-2xl text-gray-500 h-[275px] ">
              <p className="p-24 ">No Booking found.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

export default ViewBookadmin