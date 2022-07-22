import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiHome4Line } from "react-icons/ri";
import LogoImage from "./../../assests/images/authLogo.svg";
const Logo = () => {
  return (
    <div className="  flex-[2] lg:flex-1 container-logo flex flex-col justify-center lg:justify-between">
      <Link href="/">
        <a className=" flex items-center gap-2 border w-fit px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white border-[#363636] text-[#363636] mt-10 mr-10">
          <RiHome4Line />
          <p>خانه</p>
        </a>
      </Link>
      <div className="flex-[5] lg:flex-[0] flex justify-center items-center">
        <Image src={LogoImage} />
      </div>
      <p className="text-center pb-3 text-sm yekanBold text-gray-700 hidden lg:block ">
        تير 1401 ©
      </p>
    </div>
  );
};

export default Logo;
