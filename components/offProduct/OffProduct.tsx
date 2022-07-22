import React from "react";
import CountDown from "./CountDown";
import SlideOff from "./SlideOff";

const OffProduct = ({OffProducts}:{OffProducts:any}) => {

  return (
    <div className="bg-[#E00230] w-full overflow-auto lg:overflow-hidden h-[310PX] lg:h-[380px]  lg:px-4  mt-14 flex items-center justify-center">
      <CountDown style="hidden lg:flex lg:h-[270px] lg:w-[18%] xl:w-[15%] ml-10 mt-10" />
      <SlideOff OffProducts={OffProducts} />
    </div>
  );
};

export default OffProduct;
