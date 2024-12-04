import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="relative z-20">
    <div className="w-[500px] m-8">
        <p className="text-6xl text-white font-extrabold">LOOKING FOR A</p>
        <p className=" text-9xl text-white mt-2 mb-2 font-extrabold">CAR&nbsp;?</p>
        <p className="text-6xl text-white font-extrabold leading-snug ">YOU'RE &nbsp;AT &nbsp;THE</p>
        <p className="text-6xl text-white font-extrabold leading-snug">RIGHT PLACE.</p>
        <br/>  <br/>
        <button className="flex h-12 w-[300px] bg-white hover:text-white">
            <Link className=" text-[#13467e] font-bold text-2xl ml-20 mt-2" to="/Cars">RENT A CAR</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
        </button>
        <br/>
<div><hr className="h-[3px] bg-white w-[950px]  mt-12"/></div>

        <div className="flex gap-20 mt-8">
            <div>
                <div className="h-10 mt-[-50px] w-10 bg-white rounded-lg px-4 py-2 text-[#13467e] font-bold">1</div><br/>
                <div className="bg-white rounded-lg h-[150px]">
                <h2 className="text-[#13467e] text-xl p-2 w-[230px]">Choose a car</h2>
                <p className="text-[#5dade2] text-sm ml-4">Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.</p>
                </div>
            </div>
            <div>
                <div className="h-10 mt-[-50px] w-10 bg-white rounded-lg px-4 py-2 text-[#13467e] font-bold">2</div><br/>
                <div className="bg-white rounded-lg h-[150px]">
                <h2 className="text-[#13467e] text-xl p-2 w-[230px]">Pick location & date</h2>
                <p className="text-[#5dade2] text-sm ml-4">Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.</p>
                </div>
            </div>
            <div>
                <div className="h-10 mt-[-50px] w-10 bg-white rounded-lg px-4 py-2 text-[#13467e] font-bold">3</div><br/>
                <div className="bg-white rounded-lg h-[150px]">
                <h2 className="text-[#13467e] text-xl p-2 w-[230px]">Make a booking</h2>
                <p className="text-[#5dade2] text-sm ml-4">Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.</p>
                </div>
            </div>
            <div className="">
                <div className="h-10 mt-[-50px] w-10 bg-white rounded-lg px-4 py-2 text-[#13467e] font-bold">4</div><br/>
                <div className="bg-white rounded-lg h-[150px]">
                <h2 className="text-[#13467e] text-xl p-2 w-[230px]">Sit back & relax</h2>
                <p className="text-[#5dade2] text-sm ml-4">Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled comfort.</p>
                </div>
            </div>
        </div>
        <br/><br/>
    </div>
</div>
</>
  )
}

export default Hero