import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Mobile from "./../../assests/images/mobile.webp";
import GooglePay from "./../../assests/images/GooglePlay.webp";
import CoffeBazar from "./../../assests/images/CoffeBazar.webp";
import Myket from "./../../assests/images/Myket.webp";
import DirectDownload from "./../../assests/images/DirectDownload.webp";
import AppStore from "./../../assests/images/AppStore.webp";
const InstallApp = () => {
  const images = [
    GooglePay,
    CoffeBazar,
    Myket,
    DirectDownload,
    AppStore,
  ];
  return (
    <div className="bg-[#E6E6E6]  lg:mt-12 px-10 rounded-lg w-[97%] lg:w-[85%] mx-auto flex flex-col lg:flex-row justify-around items-center">
      <div className="flex-1">
        <p className="text-gray-900 text-[1rem] pt-12">
          دانلود اپلیکیشن اُکالا
        </p>
        <div className="flex items-center gap-6 text-[#545458] text-sm py-6">
          <p>
            خرید آسان و راحت با تخفیف های جذاب لحظه ای،
            دانلود برای سیستم عامل های اندروید و آیفون (iOS)
          </p>
          <div className="hidden items-center text-[#02A0AB] lg:flex">
            <span>آموزش نصب</span>
            <IoIosArrowBack />
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-4">
          {images.map((image, index) => {
            return (
              <div
                className="relative w-28 h-20"
                key={index}
              >
                <Image
                  src={image}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="relative w-52 h-52 hidden lg:block">
          <Image
            src={Mobile}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
