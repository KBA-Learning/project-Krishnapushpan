import React from 'react'
import logo from '../assets/images/carl.png'
import wall from '../assets/images/wall.jpg'
const About = () => {
  return (
   <div className='bg-cover w-full'   style={{backgroundImage:`url(${wall})`}}>
     <div className='pt-[40px] pb-[40px]'>
     <div className=" flex pt-[-50px]  pb-[-50px] gap-12  h-[450px] w-[1100px] ml-[60px] rounded bg-white/70">
    <div><p className="text-[#003066] text-sm font-bold m-4">What Do You Know About Us</p>
         <p  className="text-[#003066] text-3xl font-bold ml-4">Who We Are ?</p>
         <br/>
         <p  className="text-[#003066] text-sm ml-4 leading-relaxed">Realizing the importance of superior quality transport in Kerala, he hired cars and ferried travelers across the state. This was the inception of a great venture which transformed the car rental business of Kerala. Over time, he modeled the service on a US based transport system. Today, we are proud owners of 45 active cars that fall under two categories, namely automatic rental car and manual rental car segments. Also, premium wedding rental cars are available.</p><br/>
         <p className="text-[#003066] text-sm  ml-4 leading-relaxed">To get in touch, you simply have to go through an easy and fast procedure. NRIs can book the car of their choice in advance and make the location and duration clear for better services. The vehicle will greet you at the moment you walk out of the airport. After completing 25 years in the industry, we are glad to have the support of satisfied customers who associate with us regularly. Regular inspections and timely redressal of customers’ grievances set us apart from other NRI car rental services in Kerala.</p>
    </div>
    <div className="w-[900px] m-6 h-[400px] p-10  bg-white">
        {/* <!-- <img className="w-[2500px] h-[350px] mt-10 mr-10" src="images/aboutjpg" alt=""> --> */}
        <p className="text-[#003066] text-8xl  font-bold">CARGO</p> 
        <img src={logo} alt=""/>
    </div>

</div>
     </div>
   </div>
  )
}

export default About