import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { categoryItems } from "./data";

const Category = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    initialSlide: 7,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="w-full xl:w-[85%] mx-auto mt-5 lg:mt-14">
      <Slider
        {...settings}
        className="slider-category hidden md:block"
      >
        {categoryItems.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full text-xs md:text-sm yekanBold text-gray-700 !flex !flex-col"
            >
              <Image
                src={item.img}
                objectFit="contain"
                height={140}
                width={160}
              />

              <p className="text-center pt-3">
                {item.name}
              </p>
            </div>
          );
        })}
      </Slider>

    </div>
  );
};

export default Category;
