import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiOutlineShareAlt } from "react-icons/ai";
import Slider from "./Slider";
import DetailsProduct from "./DetailsProduct";
import Collapse from "./Collapse";
import { GoPlusSmall } from "react-icons/go";

import { useRouter } from "next/router";

interface props {
  closeModal: () => void;
  product: any;
  isLoading: boolean;
}

const InfoMobile = ({
  closeModal,
  product,
  isLoading,
}: props) => {
  return (
    <div className="md:hidden">
      <header className=" fixed w-full  top-0 z-40 bg-white flex justify-between items-center px-3 py-3 shadow-md ">
        <HiOutlineArrowSmRight
          onClick={closeModal}
          size={30}
          className="cursor-pointer"
        />
        <AiOutlineShareAlt size={25} />
      </header>
      {/* images product */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p className="mt-20 text-xs">
            در حال بارگذاری...
          </p>
        </div>
      ) : (
        <>
          <div className="my-[3rem] !overflow-auto">
            <Slider product={product} />
            <div className="px-4 pb-10">
              {/* <InfoProduct/> */}
              <DetailsProduct product={product} />
              {/* property && description  collapse*/}
              <Collapse
                name="ویژگی محصول"
                content={"ویژگی برای این محصول وجود ندارد"}
              />
              <Collapse
                name="توضیح محصول"
                content={"ویژگی برای این محصول وجود ندارد"}
              />
            </div>
          </div>
          <div className="flex items-center justify-between fixed bottom-0 bg-white w-full h-16 px-4 shadow-id-product">
            <button className="bg-red-500 px-5 py-1 justify-center rounded-md text-sm text-white hover:bg-red-600 flex items-center">
              <GoPlusSmall size={25} />
              <span>خرید</span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <p className="bg-green-500 text-xs text-white rounded-md px-1 ">
                  {product.off}%
                </p>
                <p className="line-through text-xs text-gray-400">
                  {product.oldPrice}
                </p>
              </div>
              <p className="flex gap-1 items-center mt-2">
                <span className="text-gray-800">
                  {product.newPrice}
                </span>
                <span className="text-gray-400 text-xs">
                  ریال
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoMobile;
