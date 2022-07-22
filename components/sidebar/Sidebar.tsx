import Image from "next/image";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import LogoOkala from "../../assests/images/logo-okala.svg";
import { typeMenuList } from "../../interface";
import ItemsSidebar from "./ItemsSidebar";
import { sidebarState } from "../../atom/atom";
import { getRecoil, setRecoil } from "recoil-nexus";
import { useRecoilValue } from "recoil";
const Sidebar = ({ menuListSidebar }: typeMenuList) => {
  const toggleSidebar = useRecoilValue(sidebarState);

  return (
    <div className="flex items-center w-full h-full ">
      {/* menu */}
      <div
        className={`fixed top-0  h-screen overflow-auto  transition-all duration-300 !z-[9999999] w-[300px] pb-4 bg-white scroll-sidebar ${
          toggleSidebar
            ? "translate-x-0"
            : "translate-x-full"
        } `}
      >
        {/* close btn sidebar && logo  */}
        <div className="flex p-2 shadow-sm">
          <div className="flex-1 flex justify-center mt-4">
            <Image
              width={60}
              height={60}
              objectFit="contain"
              src={LogoOkala}
            />
          </div>
          <RiCloseLine
            onClick={() =>
              setRecoil(sidebarState, !toggleSidebar)
            }
            size={25}
            className="cursor-pointer"
          />
        </div>

        {/* items sidebar */}
        <ItemsSidebar menuListSidebar={menuListSidebar} />
      </div>
      {/* overlay */}
      <div
        onClick={() =>
          setRecoil(sidebarState, !toggleSidebar)
        }
        className={`fixed top-0 left-0 !z-[999999] ${
          toggleSidebar
            ? " h-screen w-full bg-[#00000040]"
            : "w-0 h-0"
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
