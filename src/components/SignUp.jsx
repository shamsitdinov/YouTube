import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import NavLogin from "./NavLogin";
import video from "../video.mp4";
import { Route, Routes } from "react-router-dom";
import img from "../assets/YouTube_full-color_icon_(2017).svg.png"
const SignUp = ({ open, setOpen }) => {
  const [truFalse, setTruFalse] = useState(true);
  return (
    <div>
      <NavLogin />
      <div className=" absolute z-20 flex justify-center  w-full">
        <Routes>
          {truFalse ? <Route path="/register" element={<Register open={open} setOpen={setOpen} />} /> : <Route path="/login" element={<Login open={open} setOpen={setOpen} />} />}
          </Routes>
      </div>
     
    </div>
  );
};


export default SignUp;
