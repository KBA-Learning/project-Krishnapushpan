import React from 'react'
import why from '../assets/images/why1.png'
const Whypart = () => {
  return (
    <>
    {/* // <!-- why  part starting --> */}
    <div className="bg-white h-[500px]">
        <div><br/>
            <p className="text-md text-[#003066] text-center">Why Choose Us</p><br/>
            <p className="text-4xl text-[#003066] text-center font-extrabold">Our Features</p><br/>
          <p className="text-[12px] text-[#003066] text-center">Discover a world of convenience, safety, and customization, paving the way for <br/>unforgettable adventures and seamless mobility solutions.</p>
        </div>
        <br/><br/>
        <div className="flex gap-16">
            <div className="w-[30%] ml-10">
                <div><p className="text-lg font-bold text-[#003066]">First className services</p><br/>
                <p className="text-[12px] text-[#003066]">Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p></div><br/>
                <div><p className="text-lg font-bold text-[#003066]">24/7 road assistance</p><br/>
                <p  className="text-[12px] text-[#003066]">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p></div>
            </div>
            <div className="w-[30%]">
                <img  src={why} alt=""/>
            </div>
            <div className="w-[30%]">
                <div><p className="text-lg font-bold text-[#003066]">Quality at Minimum Expense</p><br/>
                <p  className="text-[12px] text-[#003066]">Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</p></div><br/>
                <div><p className="text-lg font-bold text-[#003066]">Free Pick-Up & Drop-Off</p><br/>
                <p  className="text-[12px] text-[#003066]">Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p></div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Whypart