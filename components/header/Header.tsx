import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoOkala from "../../assests/images/logo-okala.svg";
import HeaderLeft from "./HeaderLeft";
import HeaderSearch from "./HeaderSearch";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosMenu, IoIosLogIn } from "react-icons/io";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../atom/atom";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] =
    useRecoilState(sidebarState);
  const [isScrolled, setIsScrolled] = useState(false);
  const threshold = 100;
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (
      currentScrollYPosition: number
    ) =>
      Math.abs(
        currentScrollYPosition - previousScrollYPosition
      ) > threshold;

    const isScrollingUp = (
      currentScrollYPosition: number
    ) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(
        previousScrollYPosition > 0 &&
        currentScrollYPosition === 0
      ) &&
      !(
        currentScrollYPosition > 0 &&
        previousScrollYPosition === 0
      );

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (
        scrolledMoreThanThreshold(currentScrollYPosition)
      ) {
        const newScrollDirection = isScrollingUp(
          currentScrollYPosition
        )
          ? "down"
          : "up";
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0
            ? currentScrollYPosition
            : 0;
      }
    };

    const onScroll = () =>
      window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>

      <div
        className={`w-full sticky top-0 !z-[9999] bg-white ${
          scrollDir === "down" && "shadow-md"
        }`}
      >
        {" "}
        {/* header  */}
        {/* header top */}
        <header
          className={` w-full xl:w-[85%] mx-auto shadow-md z-50  lg:shadow-none px-3 flex justify-between items-center gap-11 xl:gap-32 `}
        >
          {/* menu button mobile devices */}
          <IoIosMenu
            onClick={() => setToggleSidebar(!toggleSidebar)}
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
      </div>
      <div className={`w-full relative  !z-[999] bg-white pb-4 lg:pb-10 `}>
        <div className="w-full xl:w-[85%] mx-auto">
          <div className=" pt-4 lg:pt-10  flex flex-col px-3 lg:flex-row lg:items-center gap-6 lg:gap-14">
            {/* change shop && button for login or sign up in mobile devices*/}
            <div className="flex justify-between lg:justify-start  items-center gap-5">
              <p className="text-gray-600 text-sm">
                خرید از{" "}
                <span className="text-gray-900">
                  امارکت
                </span>
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
        </div>
        {/* header search for responsive */}
        <HeaderSearch className="flex lg:hidden mx-3 mt-4" />
      </div>
    </>
  );
};

export default Header;
