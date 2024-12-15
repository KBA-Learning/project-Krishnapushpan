import React from 'react';
import logo from '../assets/images/carl.png';
import { Link } from 'react-router-dom';
import getUserType from '../Utils/Auth.jsx';
import Logout from './Logout';

const Navbar = () => {
  const userType = getUserType();
  console.log(userType);

  return (
    <div className="relative z-20 flex py-6 gap-24 justify-center bg-[#cee3f7]">
      {/* Logo Section */}
      <div className="flex items-center"> 
        <div className="font-bold text-[#13467e] text-3xl sm:text-4base">CARGO</div>&nbsp;&nbsp;
        <div>
          <img className="h-[60px] mt-[-20px]" src={logo} alt="" />
        </div>
      </div>

      {/* User Navigation */}
      {userType === 'user' && (
        <div className="flex gap-12 md:gap-16 mt-2">
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base " to="/Home">HOME</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/About">ABOUT</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/Cars">CARS</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/ViewBookUser">BOOKING</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/Contact">CONTACT</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/Terms">TERMS</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      )}

      {/* Admin Navigation */}
      {userType === 'admin' && (
        <div className="flex gap-12 md:gap-16  mt-2">
           <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/Home">HOME</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/Cars">CARS</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/ViewBookadmin">VIEW BOOKING</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/ViewMessage">VIEW MESSAGES</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <Link className="font-bold text-[#13467e] text-base" to="/AddCar">ADD CAR</Link>
            <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#13467e] transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      )}

      {/* Logout */}
      <Logout />
    </div>
  );
};

export default Navbar;
