import { useState } from "react";
interface props {
  name: string;
  style: string | boolean;
  hoverMenuItem:(i:any)=> void;
}

const MenuItems = ({ name, style,hoverMenuItem }: props) => {

  return (
    <>
      <div
      onMouseEnter={hoverMenuItem}
        className={`flex justify-around text-xs text-gray-600 pt-2 pb-4 cursor-pointer ${style}`}
      >
        <p>{name}</p>
      </div>
    </>
  );
};

export default MenuItems;
