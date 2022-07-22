import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgMathMinus } from "react-icons/cg";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import IM from "./../../assests/images/Foodstuffs.png";

interface props{
    deleteProductFromCart:any;
    product:any
}

const CardShop = ({ product,deleteProductFromCart }: props) => {
  const [countProduct, setCountProduct] = useState(1);
  return (
    <div className="flex justify-between items-center px-3 border-b py-3">
      {/* image */}
      <div className="flex  items-center gap-4">
        <Image
          src={product.img[0]}
          objectFit="contain"
          width={60}
          height={60}
        />
        {/* increase & decrease */}
        <div className="flex flex-col gap-9">
          <Link href="/">
            <a className="text-[14px] yekanBold">
              {product.title}
            </a>
          </Link>
          <div className="flex cursor-pointer items-center justify-between h-10 w-[140px] overflow-hidden  rounded-xl  bg-[#f8f8f8]">
            <div onClick={()=> setCountProduct((prev)=> prev + 1)} className="bg-[#f01436] h-full flex justify-center items-center text-white px-2">
              <HiOutlinePlusSm size={20} />
            </div>
            <p className="text-gray-800 yekanBold text-sm">{countProduct}</p>
            <div className="bg-[#f0f0f0] h-full flex justify-center items-center text-[#f01436] px-2">
              {countProduct === 1 ? (
                <MdDelete onClick={deleteProductFromCart} size={20} />
              ) : (
                <CgMathMinus  onClick={()=> setCountProduct((prev)=> prev - 1)} size={20} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* price & off */}
      <div className="flex items-end flex-col gap-5">
        <p className="bg-green-500 text-xs w-fit text-white rounded-md px-2 py-1">
          {product.off}
        </p>
        <p className="text-left line-through text-xs  text-gray-600">
          {product.oldPrice}
        </p>
        <div className="flex justify-between   items-center pb-3">
          <p className="flex items-center  text-xs gap-1 ">
            <span className="text-sm yekanBold">
              {" "}
              {product.newPrice}
            </span>
            <span>ریال</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
