import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
interface props {
  item: {
    path: string;
    name: string;
  };
}
const SubMenu = ({ item }: props) => {
  return (
    <div className="pr-[0.15rem]">
      <Link href={item.path}>
        <a className="flex items-center gap-1">
          <RiArrowDownSLine size={18} className="text-gray-500"/>
          <span className="text-[0.75rem] text-gray-500">
            {item.name}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default SubMenu;
