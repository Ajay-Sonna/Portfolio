import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import logo from '../assets/icon.png'

function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  //const [showMenu , setShowMenu] = useState(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className="">
      <nav className="">
        <div className="container py-2 px-4 relative mx-auto">
          <div className="flex justify-between items-center ">
            <div className="flex  items-center flex-shrink-0">
              <img src={logo} className="max-w-24 mr-5 bg-yellow-500"></img>
              <h4 className="text-white font-bold">Sonna Ajay</h4>
            </div>
            <ul className="hidden text-white lg:flex space-x-10 ml-10 ">
              <a href="#About" className="md:hover:bg-yellow-400  rounded-lg md:hover:text-black transition ease-in-out duration-300">
                <li className="p-2">About</li>
              </a>
              <a href="#Experience">
                <li className="p-2 md:hover:bg-yellow-400  rounded-md md:hover:text-black">Experience</li>
              </a>
              <a href="#Projects">
                <li className="p-2 md:hover:bg-yellow-400  rounded-md md:hover:text-black">Projects</li>
              </a>
              <a href="#Contact">
                <li className="p-2 md:hover:bg-yellow-400  rounded-md md:hover:text-black">Contact</li>
              </a>
            </ul>
            <div className="lg:hidden md:fex flex-col justify-end">
            <button onClick={toggleNavMenu}>
              {navMenu ? <X /> : <Menu />}
            </button>
          </div>
          </div>
          {navMenu && (
            <div className="lg:hidden flex flex-col justify-center text-center tracking-tight">
              <ul className="space-y-2">
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
