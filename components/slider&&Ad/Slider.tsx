import Image from "next/image";
import React, { useState } from "react";
import SliderSlick from "react-slick";
import { ImagesSlider } from "./data";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import styles from "./../../styles/slick.module.css";

interface props {
  style: string;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow opacity-0 lg:opacity-100"
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        right: "2%",
        zIndex: "1",
        background: "#fff",
        borderRadius: "10px",
        padding: "12px 8px",
        boxShadow: "0 0 7px -1px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <RiArrowRightSLine
        className="text-gray-500"
        size={25}
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
        left: "2%",
        zIndex: "1",
        background: "#fff",
        borderRadius: "10px",
        padding: "12px 8px",
        boxShadow: "0 0 7px -1px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <RiArrowLeftSLine
        className="text-gray-500"
        size={25}
      />
    </div>
  );
}

const Slider = ({ style }: props) => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const testSettings = {
    backgroundColor: "#fff",
    width: "20px",
    outline: "0",
    borderRadius: "10px",
  };

  const settingsNoModules = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev: any, next: any) => {
      setCurrentSlide(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "2%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <button
        // @ts-ignore
        style={i === currentSlide ? testSettings : null}
      >
        {i}
      </button>
    ),
  };

  const settingsWithModules = {
    ...settingsNoModules,
    dotsClass: styles.button__bar,
  };
  return (
    <div className={`${style}  sm:mt-14 lg:mt-0 `}>
      <SliderSlick
        className="relative rounded-xl react-slick-slider"
        {...settingsWithModules}
      >
        {ImagesSlider.map((item: any, index: number) => {
          return (
            <div
              className="relative w-full h-[25vh] md:h-[55vh] "
              key={index}
            >
              <Image
                src={item}
                layout="fill"
                className="rounded-xl"
              />
            </div>
          );
        })}
      </SliderSlick>
    </div>
  );
};

export default Slider;
