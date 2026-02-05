"use client";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import BigVideo from "./BigVideo";
import Videos from "./Videos";
import { icons } from "../Data";
import NavIcons from "./NavIcons";
import { apiYoutube } from "../API";
import Footer from "./Footer";
import Register from "./Register";
import Navbar from "./Navbar";

const Main = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentVideo, setCurrentVideo] = useState();
  const [videoId, setVideoId] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [navIcons, setNavIcons] = useState([]);
  const [activeIcon, setActiveIcon] = useState("all");

  const selectVideo = (num) => {
    setVideoId(num);
    const newYoutubeData = [...youtubeData];
    newYoutubeData.splice(num, 1);
    setYoutubeData(newYoutubeData);
    console.log(youtubeData);
  };

  const apiYoutube = async (text) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${text}&part=snippet%2Cid&regionCode=US&maxResults=100&order=date`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d1c69633dcmshc9dd49548d2f39cp13adc3jsnf9dc71087599",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setCurrentVideo(result.items[videoId]);
      setYoutubeData(result.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiYoutube("music");
    setNavIcons(icons);
  }, [videoId]);

  const searchVideo = (e) => {
    e.preventDefault();
    apiYoutube(search);
  };

  const changeShow = (num) => {
    setShowCards(true);
    setVideoId(num);
  };
  // const userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {/* <div className="h-[90vh] bg-slate-500 text text-white w-full flex justify-center flex-col gap-8 items-center text-center text-4xl">
        <h1>Please Create your account, then you can watch the videos</h1>
        <div className="flex gap-10">
          <button className="p-4 bg-blue-700 text-white rounded-lg cursor-pointer">
            <a href="/register"> Register</a>
          </button>
          <button className="p-4 bg-green-700 text-white rounded-lg cursor-pointer">Login</button>
        </div>
      </div> */}

      {/* <Register /> */}
      {/* <Navbar searchVideo={searchVideo} search={search} setSearch={setSearch} apiYoutube={apiYoutube} /> */}

      <Navbar searchVideo={searchVideo} search={search} setSearch={setSearch} activeIcon={activeIcon} setActiveIcon={setActiveIcon} navIcons={navIcons} apiYoutube={apiYoutube} />
      {showCards ? (
        <div className="grid grid-cols-21 max-md:grid-cols-1 ">
          <BigVideo currentVideo={currentVideo} />
          <Cards videoId={videoId} selectVideo={selectVideo} youtubeData={youtubeData} />
        </div>
      ) : (
        <Videos changeShow={changeShow} videoId={videoId} selectVideo={selectVideo} youtubeData={youtubeData} />
      )}
    </div>
  );
};

export default Main;

// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { IoCheckmark } from "react-icons/io5";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

// const Main = () => {
//   const [iconLowerCase, setIconLowerCase] = useState(false);
//   const [iconUpperCase, setIconUpperCase] = useState(false);
//   const [iconNumber, setIconNumber] = useState(false);
//   const [iconLength, setIconLength] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const matchPassword = () => {
//     if (password === confirmPassword) {
//       alert("Success");
//     } else {
//       alert("Please match Passwords");
//     }
//   };

//   const requirementsMatch = () => {
//     const lettersArr = letters.split("");
//     const numbersArr = numbers.split("");

//     lettersArr.map((item, index) => {
//       if (password.includes(item)) {
//         setIconLowerCase(true);
//       } else if (password.includes(item.toUpperCase())) {
//         setIconUpperCase(true);
//       }
//     });
//     numbersArr.map((item, index) => {
//       if (password.includes(item)) {
//         setIconNumber(true);
//       }
//     });
//     if (password.length > 6) {
//       setIconLength(true);
//     }
//   };

//   return (
//     <div className="h-[100vh] flex justify-center items-center">
//       <form
//         action=""
//         className="flex p-10 rounded-md flex-col w-[60vw] bg-gray-500 gap-4"
//       >
//         <input
//           className="p-4"
//           type="text"
//           name=""
//           placeholder="Full Name"
//           id=""
//         />
//         <div className="relative">
//           <input
//             className="p-4 w-full"
//             type={showPassword ? "text" : "password"}
//             name=""
//             placeholder="Password"
//             id=""
//             onKeyUp={requirementsMatch}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {!showPassword ? (
//             <FaEye
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute top-5 opacity-70 right-4 cursor-pointer"
//             />
//           ) : (
//             <FaEyeSlash
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute top-5 opacity-70 right-4 cursor-pointer"
//             />
//           )}
//         </div>
//         <input
//           className="p-4"
//           type="password"
//           name=""
//           placeholder="Confirm Password"
//           id=""
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button
//           onClick={matchPassword}
//           className="bg-green-600 text-white py-2 cursor-pointer rounded-lg"
//           type="submit"
//         >
//           Send
//         </button>
//         <div>
//           <p className="flex items-center gap-2 text-white">
//             {iconLowerCase ? (
//               <IoCheckmark className="bg-green-600" />
//             ) : (
//               <IoMdClose className=" bg-red-600" />
//             )}{" "}
//             Must be lowercase
//           </p>
//           <p className="flex items-center gap-2 text-white">
//             {iconUpperCase ? (
//               <IoCheckmark className="bg-green-600" />
//             ) : (
//               <IoMdClose className=" bg-red-600" />
//             )}{" "}
//             Must be uppercase
//           </p>
//           <p className="flex items-center gap-2 text-white">
//             {iconNumber ? (
//               <IoCheckmark className="bg-green-600" />
//             ) : (
//               <IoMdClose className=" bg-red-600" />
//             )}{" "}
//             Must be numbers
//           </p>
//           <p className="flex items-center gap-2 text-white">
//             {iconLength ? (
//               <IoCheckmark className="bg-green-600" />
//             ) : (
//               <IoMdClose className=" bg-red-600" />
//             )}{" "}
//             Minimum length 6 characters
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Main;
