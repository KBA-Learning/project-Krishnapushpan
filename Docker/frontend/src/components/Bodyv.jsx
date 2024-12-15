import React from 'react'
import backvideo from '../assets/videos/video1.mp4'
const Bodyv = () => {
  return (
    // <!-- Video Background -->
    <video autoPlay muted loop   className="fixed -z-10 inset-0 w-full h-full object-cover">
        <source src={backvideo} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
  )







































  
}

export default Bodyv