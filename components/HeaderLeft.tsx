import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
const HeaderLeft = () => {
  return (
    <div>
      <div className=" items-center gap-4 hidden lg:flex">
        <button className="flex gap-2 items-center hover:bg-gray-300 transition-all bg-gray-200 text-gray-800 p-3 rounded-xl">
          <BiUser size={25} />
          <span className="text-sm">ورود / ثبت نام</span>
        </button>
        <button className="p-3 bg-[#E0F2F4] transition-all hover:bg-[#98dbdc] rounded-xl">
          <AiOutlineShoppingCart
            size={25}
            className="text-[#02A0A4]"
          />
        </button>
      </div>
      <a
        href="tel:9052549459"
        className="flex lg:hidden items-center gap-2 bg-gray-100 py-1 px-3 rounded-xl"
      >
        <BsHeadset size={21} className="text-gray-700" />
        <p>۱۵۴۴</p>
      </a>
    </div>
  );
};

export default HeaderLeft;
