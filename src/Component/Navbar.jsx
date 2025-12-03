import React, { useState } from 'react'
import { FaCircleDot } from "react-icons/fa6";
import { HiMiniLanguage } from "react-icons/hi2";
import { CiBrightnessDown } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Navbar = () => {
  const [dd, setdd] = useState(false);

  return (
    <div className='flex justify-between items-center h-20 px-6 shadow-md bg-white'>

      {/* Logo and Title */}
      <div className='flex items-center gap-4'>
        <img src="/logo1.png" alt="logo" className='w-10 h-10' />
        <h1 className='text-xl font-bold tracking-wider'>MATERIO</h1>
        <FaCircleDot />
      </div>

      {/* Search Area */}
      <div className="relative">
        <div
          className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow cursor-pointer"
          onClick={() => setdd(!dd)}
        >
          <p>Search</p>
        </div>

        {/* Dropdown */}
        {dd && (
          <div className="absolute top-12 left-0 w-80 p-4 bg-gray-200 rounded-lg shadow-lg grid grid-cols-2 gap-4 z-50">
            {["Calendar", "Invoice List", "User List", "Role & Permissions,Calendar", "Invoice List", "User List", "Role & Permissions Calendar", "Invoice List", "User List", "Role & Permissions Calendar", "Invoice List", "User List", "Role & Permissions  "].map((item, i) => (
              <div key={i} className="text-sm font-semibold capitalize text-black">
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <HiMiniLanguage size={26} />
        <CiBrightnessDown size={26} />
        <FaRegStar size={26} />
        <MdOutlineNotificationsActive size={26} />
        <img src="/logo2.png" alt="profile" className='rounded-full w-10 h-10' />
      </div>
    </div>
  );
};

export default Navbar;
