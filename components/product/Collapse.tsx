import { useState } from "react";
import { Collapse as RactCollapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";


interface props {
  name: string;
  content:any
}
const Collapse = ({ name, content }: props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div  className="border-b cursor-pointer border-gray-100 py-4">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between"
      >
        <button className="text-sm  text-gray-700">
          {name}
        </button>
        <IoIosArrowDown
          size={20}
          className={`text-gray-500 transition-all ${
            toggle ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <RactCollapse isOpened={toggle}>
        <p className="text-sm  text-center mt-8 text-gray-500">{content}</p>
      </RactCollapse>
    </div>
  );
};

export default Collapse;
