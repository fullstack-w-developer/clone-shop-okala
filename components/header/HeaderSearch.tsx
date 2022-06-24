import React from "react";
import { FiSearch } from "react-icons/fi";
interface props {
  className: string;
}
const HeaderSearch = ({ className }: props) => {
  return (
    <div
      className={`flex-1 flex items-center border p-3 rounded-2xl ${className}`}
    >
      <FiSearch size={25} className="text-gray-600 ml-2" />
      <input
        placeholder="جستجو در فروشگاه امارکت..."
        className="border-hidden outline-none w-full text-sm placeholder:text-gray-400 / 2 placeholder:text-xs"
      />
    </div>
  );
};

export default HeaderSearch;
