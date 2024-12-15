import React from 'react'
import CarGrid from '../components/CarGrid'
const Cars = () => {
  return (
    <>
    <div>

        <p className="text-[#003066] mt-[40px] text-center text-2xl font-['Sacramento']">Explore the world with comfortable car</p>
        <br/>
    </div>

<div id="main" className="grid ">

<CarGrid />
</div>
</>
  )
}

export default Cars