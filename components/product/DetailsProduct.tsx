import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
interface props {
  product:any
}
const DetailsProduct = ({product}:props) => {
  return (
    <>
      <div className="flex item-center justify-between  mt-4">
        <p>{product.title}</p>
        <div className="flex gap-2 text-white rounded-md px-1 items-center bg-yellow-500">
          <AiOutlineStar />
          <p className="text-md">{product.rate}</p>
        </div>
      </div>
      <p className="text-left line-through text-xs text-gray-400 mt-4">
        {product.oldPrice}
      </p>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 text-sm yekanBold items-center">
          <Image
            src={product.company.img}
            objectFit="contain"
            width={30}
            height={30}
          />
          <p>{product.company.name}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-green-500 text-xs text-white rounded-md px-2 py-1">
            {product.off}%
          </p>
          <p className="flex gap-1 text-sm yekanBold">
            <span>{product.newPrice}</span>
            <span>ریال</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
