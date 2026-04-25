import React from "react";
import logo from "../assets/YouTube_full-color_icon_(2017).svg.png";
import { Link } from "react-router-dom";
const NavLogin = () => {
  return (
    <div className="w-full top-0">
      <nav className=" backdrop-blur-md z-50 h-[10vh] items-center justify-between px-10 text-white flex sticky top-0">
        <h1>
          <img className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-white w-10" src={logo} alt="" />
        </h1>
        <div className="flex gap-5 z-10">
       
          <Link to="/login" className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button">
            Login
          </Link>
          <a to="/signin" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavLogin;
