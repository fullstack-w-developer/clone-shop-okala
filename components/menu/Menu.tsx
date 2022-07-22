import React from "react";
import { BiCategory } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosColorFilter } from "react-icons/io";
import { BiSpreadsheet } from "react-icons/bi";
import SubMenu from "./SubMenu";
import { useRecoilState } from "recoil";
import { categoryToggleState } from "../../atom/atom";
export const Menu = () => {
  const [open, setOpen] = useRecoilState(
    categoryToggleState
  );
  return (
    <>
      <div className="bg-[#f0f0f0] w-full  text-gray-600 relative  h-14 z-[999]   yekanBold text-xs hidden lg:block">
        <div className="flex justify-between w-[85%] mx-auto h-full ">
          {/* menu right */}
          <div className="flex  items-center gap-4 h-full">
            <div
              onClick={() => setOpen(!open)}
              className={`flex  items-center gap-1 cursor-pointer h-full px-2  ${
                open && "bg-[#e6e6e6] rounded-tr-lg "
              }`}
            >
              <BiCategory size={18} />
              <p>دسته بندی محصولات</p>
            </div>
            <div>|</div>
            <div className="flex  items-center gap-1 cursor-pointer">
              <TbDiscount2 size={18} />
              <p>تخفیف ها</p>
            </div>
          </div>
          {/* menu left */}
          <div className="flex items-center gap-4">
            <div className="flex  items-center gap-1 cursor-pointer">
              <IoIosColorFilter size={18} />
              <p>اکالا رنک</p>
            </div>
            <div className="flex  items-center gap-1 cursor-pointer">
              <BiSpreadsheet size={18} />
              <p>اکالا بلاگ</p>
            </div>
          </div>
        </div>
      </div>
      <SubMenu />
    </>
  );
};
