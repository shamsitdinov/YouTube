import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";

const Login = ({ googleAccount }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      let user = userCred.user;
      if (user.emailVerified) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.accessToken);
        alert("Success");
        setFirstName("");
        setEmail("");
        setPassword("");
        navigate("/info");
      } else {
        alert("Please verify your email");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return (
    <div>
      <form
        action=""
        className="m-20 p-4 shadow-lg shadow-gray-500 rounded-lg bg-red-900 text-white flex flex-col gap-2 w-[60vw]"
      >
        <h2 className="text-center text-2xl">Login</h2>
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
          onClick={loginUser}
          type="submit"
          className="bg-green-800 text-white py-2 cursor-pointer rounded-md mt-4"
        >
          Login
        </button>
        <Link to="/register" className="text-center">
          Don't you have an account?
        </Link>
        <div className="flex justify-center items-center">
          <GoogleButton onClick={googleAccount} />
        </div>
      </form>
    </div>
  );
};

export default Login;
