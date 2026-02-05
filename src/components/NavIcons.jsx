// import React from "react";
// import { IconType } from "react-icons";
// import { IoMdMusicalNote } from "react-icons/io";
// import { TiThSmall } from "react-icons/ti";
// import { RiMovie2Fill } from "react-icons/ri";
// import { MdOutlineTheaterComedy } from "react-icons/md";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { MdSportsGymnastics } from "react-icons/md";
// import { MdOutlineFastfood } from "react-icons/md";
// import { apiYoutube } from "./../API";


// const NavIcons = () => {
//   const selectType = (item) => {
//     setActiveIcon(item);
//     if (apiYoutube) {
//       apiYoutube(item);
//     }
//   };
//   return (
//     <div className=" backdrop-blur-lg backdrop-brightness-[20%] sticky top-0 w-full z-10 h-[18vh]">
//       <div className="flex justify-between h-20 ">
//         <div className="flex gap-3 items-center">
//           <span className="text-2xl text-white">
//             <GiHamburgerMenu />
//           </span>
//           <a href="/">
//             <img className=" w-9 " src={icon} alt="" />
//           </a>
//         </div>

//         <form className="flex items-center w-[30%]" onSubmit={searchVideo}>
//           <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-full py-2 bg-transparent border-white text-white border-2 px-2  " placeholder="Search..." type="search" />
//         </form>

//         <div className=" flex items-center ">
//           <span className="text-white text-3xl">
//             <CiBellOn />
//           </span>
//           <span className="text-white text-3xl">
//             <IoPersonCircleOutline />
//           </span>
//         </div>
//       </div>

//       <div className="flex w-[80%]  flex-wrap  float-right justify-center z-10  items-center px-4 gap-10 top-[11vh] py-1 lg:justify-between">
//         {navIcons.map((item, index) => (
//           <div onClick={() => selectType(item.title)} key={index} className={activeIcon === item.title ? "flex items-center min-w-10 text-xs justify-center uppercase text-grey rounded-md  cursor-pointer bg-white  p-2" : "flex items-center min-w-10 text-xs justify-center uppercase text-grey rounded-md text-white cursor-pointer bg-[#3a3c3e] p-2"}>
//             <button className="uppercase">{item.title}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NavIcons;
