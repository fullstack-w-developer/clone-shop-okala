import Image from "next/image";
import React from "react";
import ReactSlider from "react-slick";
import { FaRegHeart } from "react-icons/fa";
interface props{
  product: any
}
const Slider = ({product}:props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="relative border-b pb-14">
        <ReactSlider
          {...settings}
          className="mt-5 w-[90%] mx-auto"
        >
          {product.img.map(
            (item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="relative h-72 w-full"
                >
                  <Image
                    src={item}
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
              );
            }
          )}
        </ReactSlider>
        <div className="absolute left-3 cursor-pointer top-0 flex flex-col items-center gap-2 bg-gray-200 p-3 rounded-md yekanBold text-sm">
          <FaRegHeart size={25} className="text-red-500" />
          <p>20</p>
        </div>
      </div>

    </>
  );
};

export default Slider;
