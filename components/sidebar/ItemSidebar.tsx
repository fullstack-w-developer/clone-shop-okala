import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
interface props {
  name: string;
  children: React.ReactNode;
  onClick?: (e: any) => void;
}
const ItemSidebar = ({ name, children }: props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="px-4 flex flex-col gap-3 cursor-pointer"
    >
      <div
        className={`item-sidebar py-1 flex items-center transition-all ${
          toggle && "bg-gray-100 rounded-md"
        }`}
      >
        <RiArrowDownSLine
          size={25}
          className="mt-1 text-gray-800 "
        />
        <p className="text-[0.80rem] yekanBold text-gray-800 ">
          {name}
        </p>
      </div>

      {toggle && children}
    </div>
  );
};

export default ItemSidebar;
