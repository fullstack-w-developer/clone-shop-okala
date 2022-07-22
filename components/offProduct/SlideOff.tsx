import React from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import Slider from "react-slick";
import CardSlide from "./CardSlide";
import CountDown from "./CountDown";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cardShopState } from "../../atom/atom";

function SampleNextArrow(props: any) {
  const {  style, onClick } = props;
  return (
    <div
      className="slick-arrow opacity-0 lg:opacity-100"
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        right: "-2%",
        zIndex: "1",
        background: "#fff",
        borderRadius: "15px",
        padding: "12px 12px",
        boxShadow: "0 0 7px -1px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <RiArrowRightSLine
        className="text-red-500"
        size={20}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow opacity-0 lg:opacity-100"
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "45%",
        left: "-2%",
        zIndex: "1",
        background: "#fff",
        borderRadius: "15px",
        padding: "12px 12px",
        boxShadow: "0 0 7px -1px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <RiArrowLeftSLine
        className="text-red-500"
        size={20}
      />
    </div>
  );
}
const SlideOff = ({
  OffProducts,
}: {
  OffProducts: any;
}) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 1,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  const cardShop = useRecoilValue(cardShopState);
  const setCardShop = useSetRecoilState(cardShopState);
  const router = useRouter();

  const addCart = (item: any) => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/auth");

    const checkProduct = cardShop.find(
      (product: any) => product._id === item._id
    );

    if (checkProduct) return null;

    setCardShop((prev: any) => [...prev, item]);
  };
  return (
    <>
      <div className="w-full lg:w-[70%] xl:w-[65%] lg:mt-10">
        <div className="hidden lg:block">
          <Slider {...settings} className="h-full">
            {OffProducts.map((item: any, index: number) => {
              return (
                <CardSlide
                  addCart={() => addCart(item)}
                  product={item}
                  key={index}
                />
              );
            })}
          </Slider>
        </div>
        <div className="flex gap-2 w-full  lg:hidden">
          <CountDown style="flex h-[270px] " />
          {OffProducts.map((item: any, index: number) => {
            return (
              <CardSlide
                addCart={() => addCart(item)}
                product={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SlideOff;
