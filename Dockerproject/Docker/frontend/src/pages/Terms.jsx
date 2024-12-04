import React from 'react'

const Terms = () => {
  return (
    <div id="main" className="grid ">
    {/* <!-- terms and condition starting --> */}
    <div id="terms" className="bg-white">

        <div className="h-[100px] ">
            <p className="text-2xl text-[#003066] font-bold text-center pt-10">TERMS & CONDITIONS</p>
        </div>
        <ol className="ml-4 text-[12px] text-[#003066] ">
            <li>We don’t take any sort of securities from customers, please make sure you have attached the relevant documents(Photo+Passport Copy and Visa
                 page +Driving License [Indian/International] ) as prescribed in the booking form. You just need to show as the original documents once you arrive.</li><br/>
            <hr/>
            <br/>
            <li>First time customer – Vehicle will be delivered at your home address(as per document proof) or  If Airport pickup is needed
                 driver will pick you up from Airport(can provide you the car from airport itself on fulfilling exact booking with all 
                 required documents submitted on the website) and will drop you with the vehicle at your home address(only first time).
                  Payment* of rental period should be made in advance on delivery of vehicle.</li><br/><hr/><br/>
            <li>Existing customers– Vehicle will be provided before your arrival or at Home address /Airport /Place of your choice.</li><br/><hr/><br/>
            <li> Delivery charges from Garage and return charges  to Garage are applicable on rental (Driver Batta + Fuel Charges).
             <ul className="leading-loose">
                <li>eg: Delivery charges to CIAL – Rs 1750/- [Driver batta+Fuel Charges]</li>
                <li>Return charges from CIAL – Rs 750/-[Driver batta] + Enough fuel to Return to Kottayam Garage</li>
                <li>Delivery charges to TRV – Rs 2500/- [Driver batta+Fuel Charges]</li>
                <li>Return charges from TRV – Rs 1250/-[Driver batta] + Enough fuel to Return to Kottayam Garage</li>
                <li>Delivery charges to CCJ- Rs 2750/- [Driver batta+Fuel Charges]</li>
                <li>Return charges from CCJ – Rs 1500/-[Driver batta] + Enough fuel to Return to Kottayam Garage</li>
             </ul>
            </li>
            <br/>
            <hr/>
            <br/>
            <li>There is monthly mileage restriction of 4000 kms, if less than a month it will be 130 kms/day. Extra kms over the rental period are chargeable.
                NB: For Fortuner, Hycross Hybrid and other Luxury Cars(eg: Audi, BMW, Benz,Jaguar) The daily limit is 100 kms/day</li><br/><hr/><br/>
                <li>On an event of accident or damage to vehicle :
                    <ul className="leading-loose">
                       <li>You need to inform our Operations Team on +919447077049 the same time.</li>
                       <li>Insurance* will be used  only on repair charges above limit^, either case rental for the repair period need to be paid.</li>
                       <li>Collision Repair Limit^ (repair cost below limit need to be fully paid by the customer as per actuals)</li>
                       <li>Rs 30,000/-(vehicle cost less than Rs 10 lakhs)</li>
                       <li>Rs 50,000/- (vehicle cost above Rs 10 lakhs)</li>
                       <li>Rs 75,000/- (vehicle cost above Rs 20 lakhs)</li>
                       <li>* No Claim Bonus+Depreciation to be paid by customer on an insurance claim</li>
                    </ul>
                   </li>
                   <br/>
                   <hr/>
                   <br/>
                <li>All traffic rule violations (eg: over speed, signal breaking ..) or any other offenses, during the rental period will be the responsibility of the hirer and the charges or penalty for the same will be charged to the hirer.</li>
                <br/><hr/><br/>
                <li>Please treat the vehicle as your own and keep it clean and tidy. “No smoking or littering inside the car”.</li><br/><hr/>
        </ol>
     </div>
     {/* <!-- terms and condition ending -> */}

   
</div>
  )
}

export default Terms