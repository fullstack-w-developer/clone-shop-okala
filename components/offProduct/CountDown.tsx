import React, { useState, useEffect } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
interface props {
style?: string
}
const CountDown = ({style}: props) => {
  const [rHour, setRHour] = useState(11); //countdown 2 hours.
  const [rMin, setRMin] = useState(0);
  const [rSec, setRSec] = useState(0);
  const startDate = new Date();

  function getTime() {
    const finishHours =
      startDate.getHours() +
      11 +
      startDate.getMinutes() / 60 +
      startDate.getSeconds() / 3600;
    const currentHours =
      new Date().getHours() +
      new Date().getMinutes() / 60 +
      new Date().getSeconds() / 3600;
    const remainingHours = finishHours - currentHours;

    const remainingHour = Math.floor(remainingHours);
    const remainingMinute = Math.floor(
      (remainingHours - remainingHour) * 60
    );
    const remainingSecond = Math.floor(
      ((remainingHours - remainingHour) * 60 -
        remainingMinute) *
        60
    );

    setRHour(remainingHour);
    setRMin(remainingMinute);
    setRSec(remainingSecond);

  }

  useEffect(() => {
    const i = setInterval(getTime, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className={`  flex-col  justify-between px-1 ${style}`}>
      <TbDiscount2 size={50} className="text-white" />
      <p className="text-white  lg:text-xl ">
        پیشنهاد روز
      </p>
      <div className="bg-[#302d2d] w-fit  rounded-lg lg:pb-1">
        <p className="text-white text-center text-[10px] lg:text-sm pt-2 px-3">
          زمان باقیمانده پیشنهاد
        </p>
        <div className="mt-6 lg:mt-7 px-3 pb-4">
          <span className="itemTime extrayekan">
            {("0" + rHour).slice(-2)}
          </span>
          <span className="text-white lg:mx-2">:</span>
          <span className="itemTime extrayekan">
            {("0" + rMin).slice(-2)}
          </span>
          <span className="text-white lg:mx-2">:</span>
          <span className="itemTime extrayekan">
            {("0" + rSec).slice(-2)}
          </span>
        </div>
      </div>
      <button className="text-white text-xs lg:text-lg yekanBold flex items-center gap-2">
        <span> مشاهده ی همه</span>
        <IoIosArrowBack size={20} />
      </button>
    </div>
  );
};

export default CountDown;
