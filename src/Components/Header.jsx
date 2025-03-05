import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className="bg-orange-500 shadow-2xl shadow-orange-500/50 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-2 text-sm text-center ">
          <span className="font-bold"> Email: swamiabhyanand@gmail.com</span>
          <span className="font-bold">Call Now! 8881810100</span>
        </div>

        <nav className="bg-white shadow-md flex justify-between items-center py-4 px-10 md:px-12 relative">
          <div className="flex items-center">
            <img src="./images/logo.png" alt="Logo" className="h-12 md:h-16" />
          </div>

          <button
            className="text-orange-500 text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex space-y-2 md:space-y-0 md:space-x-6 font-bold p-4 md:p-0 transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {[
              "Home",
              "About",
              "Blog",
              "Gallery",
              "Donate",
              "Event",
              "E-Books",
              "Contact Us",
            ].map((item, index) => (
              <li key={index} className="text-center md:text-left">
                <a
                  href="#"
                  className="hover:text-orange-500 block py-2 md:py-0"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
