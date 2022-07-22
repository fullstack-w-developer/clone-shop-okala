import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { GoPlusSmall } from "react-icons/go";
import { OffProduct } from "../offProduct/data";
import Other from "./../../assests/images/other.svg";
import TabsProduct from "./TabsProduct";
interface props {
  product: any;
}
const MdSlide = ({ product }: props) => {
  const [toggle, setToggle] = useState(0);
  return (
    <>
      <div className="flex gap-5 px-8">
        <div className="flex flex-1 gap-6">
          <div className="flex flex-col gap-3">
            {product.img.map((item: any, index: number) => {
              return (
                <div
                  onClick={() => setToggle(index)}
                  key={index}
                  className={`relative cursor-pointer h-24 w-20 rounded-lg border  border-[#02A0A4] overflow-hidden`}
                >
                  <Image
                    src={item}
                    objectFit="contain"
                    layout="fill"
                  />
                  {toggle === index && (
                    <div className="w-full absolute h-full bg-[#dcf4f4b4] z-50"></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="border-2 relative w-96 h-96 flex-1 rounded-lg ">
            <Image
              src={product.img[toggle]}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* left */}
        <div className="flex-1">
          {/* title */}
          <p className="text-lg text-gray-800 yekanBold ">
          {product.title}
          </p>
          {/* company */}
          <div className="flex gap-3 items-center mt-14">
            <Image src={product.company.img} width={40} height={40} />
            <p>{product.company.name}</p>
          </div>
          {/* category */}

          <p className="mt-10 yekanBold">
            <span className="text-gray-600">
              دسته بندی:
            </span>
            <span className="pr-5 text-[#398F98]">
              {product.category}
            </span>
          </p>
          {/* rate */}
          <div className="flex mt-10 w-fit gap-2 text-white rounded-md px-3 py-1 items-center bg-[#FFBC02]">
            <AiOutlineStar />
            <p className="text-md">۱.۱</p>
          </div>
          {/* add to cart & price & off */}
          <div className="flex items-center justify-between mt-14  bg-white w-full h-16 px-4 ">
            <button className="bg-[#F01436] px-10 py-2 justify-center rounded-md text-sm text-white hover:bg-red-600 flex items-center">
              <GoPlusSmall size={30} />
              <span className="text-sm yekanBold">
                افرودن به سبد خرید
              </span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <p className="bg-green-500 text-xs text-white rounded-md p-2 ">
                  {product.off}%
                </p>
                <p className="line-through text-sm text-gray-400">
                  {product.oldPrice}
                </p>
              </div>
              <p className="flex gap-1 items-center mt-2">
                <span className="text-gray-800 text-lg">
                 {product.newPrice}
                </span>
                <span className="text-gray-400 text-xs">
                  ریال
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <TabsProduct product={product} />
      <div className="absolute left-3 top-20 cursor-pointer  flex flex-col items-center gap-2 bg-gray-200 p-3 rounded-md yekanBold text-sm">
        <FaRegHeart size={25} className="text-red-500" />
        <p>{product.like}</p>
      </div>
    </>
  );
};

export default MdSlide;
//
