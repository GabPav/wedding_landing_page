import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='flex justify-between items-center bg-white text-black py-2 px-8 md:px-32 drop-shadow-md'>
      <img src={logo} alt="Company Logo" className="h-14 hover:scale-105 transition-transform duration-300 md:ml-0 " />

      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
      <li className="relative cursor-pointer text-gray-500 transition-all font-poppins-300 
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                       after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
          HOME
        </li>
        <li className="relative cursor-pointer text-gray-500 transition-all font-poppins-300 
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                       after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
          ABOUT
        </li>
        <li className="relative cursor-pointer text-gray-500 transition-all font-poppins-300 
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                       after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
          GALLERY
        </li>
        <li className="relative cursor-pointer text-gray-500 transition-all font-poppins-300 
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                       after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
          KIND WORDS
        </li>
        <li className="relative cursor-pointer text-gray-500 transition-all font-poppins-300 
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                       after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
          CONTACT
        </li>
      </ul>

      <i className="bx bx-menu block text-5xl cursor-pointer bx-icon-hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}></i>

      <div className={`absolute xl:hidden top-16 left-0 w-full bg-white text-black flex flex-col items-center gap-6 font-semibold text-base transform transition-transform ${isOpen ? "block" : "hidden"}`}>
      <ul className={`${isOpen ? "block" : "hidden"} w-full`}>
  <li className="relative text-gray-500 list-none w-full text-center p-4 cursor-pointer 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
    Home
  </li>
  <li className="relative text-gray-500 list-none w-full text-center p-4 cursor-pointer 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
    About
  </li>
  <li className="relative text-gray-500 list-none w-full text-center p-4 cursor-pointer 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
    Gallery
  </li>
  <li className="relative text-gray-500 list-none w-full text-center p-4 cursor-pointer 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
    Kind words
  </li>
  <li className="relative text-gray-500 list-none w-full text-center p-4 cursor-pointer 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-400 
                 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
    Contact
  </li>
</ul>

  </div>
    </header>
  );
};

export default Navbar;
