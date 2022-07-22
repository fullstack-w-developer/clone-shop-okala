import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { IconButton } from "@mui/material";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
const UserOptionLogin = () => {
  const [toggle, setToggle] = useState(false);
   const router = useRouter()
     const logOut = ()=>{
      router.push("/logout")
     }
  return (
    <div className="relative flex">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex gap-2 items-center cursor-pointer hover:bg-gray-300 transition-all bg-gray-200 text-gray-600 p-3 rounded-xl"
      >
        <BiUser size={25} />
      </div>

      <div
        className={`absolute top-14 bg-white w-[12rem] z-50  shadow-2xl left-1 border rounded-md transition-all duration-300 ${
          toggle
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-center p-3 bg-[#02A0A4] m-1 rounded-md text-white yekanBold">
          09052549459
        </p>
        <div className=" flex gap-2 items-center border-b text-gray-900 border-gray-100 pb-3 px-2 pt-2">
          <BiUser size={20} />
          <p className="text-[14px]">حساب کاربری</p>
        </div>
        <div className=" flex gap-2 items-center border-b text-gray-900 border-gray-100  pb-3 px-2 pt-2">
          <BiShoppingBag size={20} />
          <p className="text-[14px]">سفارش های من</p>
        </div>
        <div onClick={logOut} className=" cursor-pointer flex gap-2 items-center border-b text-red-500 border-gray-100  pb-3 px-2 pt-2">
          <AiOutlineLogout size={20} />
          <p className="text-[14px]">حساب کاربری</p>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`fixed top-0 left-0 z-40 ${
          toggle ? "w-full h-screen " : "w-0 h-0"
        }`}
      ></div>
    </div>
  );
};

export default UserOptionLogin;
