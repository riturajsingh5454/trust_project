import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-8 p-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-lg md:text-xl font-bold mb-4 md:mb-0">
          ©2022 परम पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री अभ्यानंद
          <br />
          <span className="font-bold">सरस्वती जी | ALL RIGHTS RESERVED</span>
        </p>

        <div className="flex space-x-6 text-2xl">
          <a
            href="#"
            className="hover:text-blue-500 transform hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transform hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-700 transform hover:scale-110 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-red-600 transform hover:scale-110 transition"
          >
            <FaGoogle />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
