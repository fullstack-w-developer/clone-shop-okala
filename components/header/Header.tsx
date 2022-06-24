import Image from "next/image";
import React from "react";
import LogoOkala from "../../assests/logo-okala.svg";
import HeaderLeft from "../HeaderLeft";
import HeaderSearch from "./HeaderSearch";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosMenu, IoIosLogIn } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full  xl:w-[85%] mx-auto">
      {" "}
      {/* header  */}
      {/* header top */}
      <header className=" shadow-md lg:shadow-none px-3 flex justify-between items-center gap-11 xl:gap-32">
        {/* menu button mobile devices */}
        <IoIosMenu
          size={30}
          className="lg:hidden text-gray-500 cursor-pointer"
        />

        {/* logo && header right*/}
        <div>
          <Image
            width={75}
            height={75}
            objectFit="contain"
            src={LogoOkala}
          />
        </div>

        {/* header search && cenetr */}
        <HeaderSearch className="hidden lg:flex" />

        {/* button login && cart && header left */}
        <HeaderLeft />
      </header>
      {/* header bootom */}
      <div className=" mt-4 lg:mt-10 flex flex-col px-3 lg:flex-row lg:items-center gap-6 lg:gap-14">
        {/* change shop && button for login or sign up in mobile devices*/}
        <div className="flex justify-between lg:justify-start  items-center gap-5">
          <p className="text-gray-600 text-sm">
            خرید از{" "}
            <span className="text-gray-900">امارکت</span>
          </p>
          <button className="hidden lg:block text-xs border py-2 px-4 rounded-xl hover:bg-gray-100 transition-all text-gray-600">
            تغیر فروشگاه
          </button>
          <button className=" lg:hidden flex items-center gap-1 text-xs border py-2 px-2 rounded-xl hover:bg-gray-100 transition-all text-gray-600">
            <IoIosLogIn
              size={16}
              className="rotate-180 mt-1"
            />
            <span>ورود / ثبت نام</span>
          </button>
        </div>
        {/* address */}
        <div className="flex justify-between lg:justify-start hover:bg-gray-100 p-1 rounded-md cursor-pointer items-center gap-1">
          <div className="flex  items-center">
            <MdLocationOn className="text-gray-700" />
            <p className="text-xs">
              تحویل در تهران، میدان آرژانتین
            </p>
          </div>
          <RiArrowDownSLine
            className="text-gray-500 rotate-90 lg:rotate-0"
            size={20}
          />
        </div>
      </div>
      {/* header search for responsive */}
      <HeaderSearch className="flex lg:hidden mx-3 mt-4" />
    </div>
  );
};

export default Header;
