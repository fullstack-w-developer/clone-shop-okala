import Image from "next/image";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { setRecoil } from "recoil-nexus";
import { useRecoilValue } from "recoil";
import { modalInfoProduct } from "../../atom/atom";
import {useRouter} from "next/router"
interface props {
  product: any;
  addCart: (item:any) => void;
}
const CardSlide = ({ product, addCart }: props) => {
  const isOpen = useRecoilValue(modalInfoProduct);
  const router = useRouter()

  const openModalInfoDetail = () => {
    router.push(`/?product=${product._id}`)
    setRecoil(modalInfoProduct, !isOpen);
  };
  return (
    <div
      onClick={openModalInfoDetail}
      className="bg-white cursor-pointer h-[270px] lg:h-[300px]  relative min-w-[190px] lg:max-w-[210px] mx-1 lg:min-w-[160px] "
    >
      <div
        onClick={addCart}
        className="bg-[#F01436] w-fit p-1 text-white rounded-lg flex justify-center z-10 items-center absolute top-2 right-2"
      >
        <BsPlus size={30} />
      </div>
      <div className="flex flex-col justify-between h-full cursor-pointer">
        {/* image && title*/}
        <div>
          <div className="flex justify-center items-center mt-5">
            <div className="relative w-32 h-32">
              <Image
                src={product.img[0]}
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          <p className="text-right text-xs text-gray-600 pt-3 px-3">
            {product.title}
          </p>
        </div>
        <div className="pt-6 lg:pt-10">
          <p className="pl-2 text-left line-through text-xs lg:text-sm  text-gray-600">
            {product.oldPrice}
          </p>
          <div className="flex justify-between  px-2 items-center pt-3 pb-3">
            <p className="flex items-center extrayekan text-xs lg:text-sm text-slate-600 ">
              <span>ریال</span>
              <span className=""> {product.newPrice}</span>
            </p>
            <p className="bg-green-500 text-xs text-white rounded-md px-2 py-1">
              {product.off}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
