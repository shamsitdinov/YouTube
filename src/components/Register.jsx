"use client";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import React, { useState, useNavigate } from "react";
import { auth } from "./firebase";
import GoogleButton from "react-google-button";
import { provider } from "./firebase";
import { FcGoogle } from "react-icons/fc";

const Register = ({ open, setOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const verifyEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const registerAccount = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      verifyEmail();
      alert("Success");
      setFirstName("");
      setEmail("");
      setPassword("");
      // navigate("/login");
      setOpen(true);
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };
  const googleAccount = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(user.user));
      localStorage.setItem("token", user.user.accessToken);
      alert("Success");
      // navigate("/info");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };
  return (
    <div className="flex justify-center h-full items-center">
      <form action="" className="m-20 p-4 shadow-inner shadow-red-500 rounded-lg   text-white flex flex-col  gap-2 w-[50vw]">
        <h2 className=" text-3xl font-serif">
          <span className="text-red-500 text-4xl">R</span>egister
        </h2>
        <label htmlFor="">
          Name<span className="text-red-500">*</span>
        </label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="px-4 py-2 rounded-md bg-transparent  text-white border-2 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out" type="text" name="" id="" />
        <label htmlFor="">
          Email<span className="text-red-500">*</span>
        </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-2 rounded-md bg-transparent  text-white border-2 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out " type="email" name="" id="" />

        <label htmlFor="">
          Password<span className="text-red-500">*</span>
        </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="px-4 py-2 rounded-md bg-transparent  text-white border-2 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out" type="password" name="" id="" />
        <div className="flex justify-center">
          <button
            onClick={registerAccount}
            type="submit"
            className="text-white w-[40%] font-mono bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Register
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={googleAccount} class="flex overflow-hidden items-center text-sm border-2 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-800 text-white shadow hover:bg-transparent h-10 px-4 py-4 max-w-[50%] whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
            <div className="flex justify-between gap-x-4 items-center">
              <FcGoogle className="text-xl" />
              <span className="ml-1 font-mono text-white">Sign in with Google</span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex"></div>
          </button>
        </div>
        <a href="/login" className="text-center font-mono">
          Already have an account?
        </a>
      </form>
    </div>
  );
};

export default Register;
