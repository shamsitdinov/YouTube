import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white flex justify-center items-center h-[9vh]">
      <p>All rights reserved | Youtube {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
