"use client";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import React, { useState, useNavigate } from "react";
import { auth } from "./firebase";
import GoogleButton from "react-google-button";
import { provider } from "./firebase";

const Register = () => {
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
    <div>
      <form
        action=""
        className="m-20 p-4 shadow-lg shadow-gray-500 rounded-lg bg-blue-900 text-white flex flex-col gap-2 w-[60vw]"
      >
        <h2 className="text-center text-2xl">Register</h2>
        <label htmlFor="">Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-4 text-black"
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 text-black"
          type="email"
          name=""
          id=""
        />
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-4 text-black"
          type="password"
          name=""
          id=""
        />
        <button
          onClick={registerAccount}
          type="submit"
          className="bg-green-800 text-white py-2 cursor-pointer rounded-md mt-4"
        >
          Register
        </button>
        <a href="/login" className="text-center">
          Already have an account?
        </a>

        <div className="flex justify-center items-center">
          <GoogleButton onClick={googleAccount} />
        </div>
      </form>
    </div>
  );
};

export default Register;
