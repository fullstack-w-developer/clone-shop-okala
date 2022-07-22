import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Sabah from "./../../assests/images/pgah.webp";
const DetailsProduct = () => {
  return (
    <>
      <div className="flex item-center justify-between  mt-4">
        <p>خامه تتراپک200 گرمی صباح</p>
        <div className="flex gap-2 text-white rounded-md px-1 items-center bg-yellow-500">
          <AiOutlineStar />
          <p className="text-md">۱.۱</p>
        </div>
      </div>
      <p className="text-left line-through text-xs text-gray-400 mt-4">
        ۱۶۲۶۲۶
      </p>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 text-sm yekanBold items-center">
          <Image
            src={Sabah}
            objectFit="contain"
            width={30}
            height={30}
          />
          <p>صباح</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-green-500 text-xs text-white rounded-md px-2 py-1">
            ۶%
          </p>
          <p className="flex gap-1 text-sm yekanBold">
            <span>۱۶۲۶۲۶</span>
            <span>ریال</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
