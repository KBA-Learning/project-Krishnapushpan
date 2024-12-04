import React from 'react'
import {useNavigate} from 'react-router-dom'
const Logout = () => {
    const navigate =useNavigate();
    const handleLogout= async() =>{
        await fetch ('/logout',{
            method:"GET",
            credentials:"include",
        });
        document.cookie = 'Authtoken=; Max-Age=0';
        navigate('/');
    };

  return (
<div className="relative group  mt-2">
  <button
    onClick={handleLogout}
    className="font-bold text-[#13467e] text-base"
  >
    LOGOUT
  </button>
  <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
</div>  )
}

export default Logout