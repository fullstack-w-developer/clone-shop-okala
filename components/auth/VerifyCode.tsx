import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import ReactInputVerificationCode from "react-input-verification-code";
import { codeAgainApi } from "../../utils/API";

interface props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  verifySubmit: () => void;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setInterCode: React.Dispatch<
    React.SetStateAction<string>
  >;
  phone: string;
  interCode: string;
  verifyPhone: () => void;
  isLoadingVerifyCode: boolean;
}
const VerifyCode = ({
  setStep,
  verifySubmit,
  setCode,
  phone,
  interCode,
  setInterCode,
  isLoadingVerifyCode,
}: props) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isSuuccessAgainCode, setIsSuccessAgainCode] =
    useState(false);
  const [isLoading, setIsLoding] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const codeAgain = async () => {
    setIsLoding(true);
    await codeAgainApi(phone).then((res) => {
      setIsSuccessAgainCode(true);
      setIsLoding(false);
      setInterCode(res.data.code);
    });
  };

  return (
    <div className="flex-[5] flex justify-center flex-col gap-1">
      <h4 className="text-gray-900 text-lg yekanBold">
        کد 5 رقمی تائید را وارد نمایید
      </h4>
      <p className="text-gray-600 text-[0.75rem] yekanBold">
        کد تائید برای شماره موبایل <span>{phone}</span>{" "}
        ارسال شد.
      </p>
      <div
        onClick={() => setStep(0)}
        className="mt-6 cursor-pointer flex gap-2 items-center text-[#5C9798]"
      >
        <BiEdit size={20} />
        <p>ویرایش شماره</p>
      </div>
      <div className="w-[25rem] mt-10">
        <p className="text-sm text-center  pb-2">
          کد تائید شما : {interCode}
        </p>
        <div className="custom-styles ">
          <ReactInputVerificationCode
            length={5}
            autoFocus={true}
            placeholder=""
            onChange={(e: any) => {
              setCode(e);
            }}
          />
        </div>
        <button
          onClick={verifySubmit}
          className="w-full bg-[#F01436] hover:bg-[#da1532] transition-all py-3 rounded-lg text-white mt-6"
        >
          {isLoadingVerifyCode
            ? "در حال ارسال..."
            : " تائید و ادامه"}
        </button>
        {isLoading ? (
          <span className="text-[13px] yekanBold text-red-600 flex justify-center mt-6">
            در حال ارسال مجدد...
          </span>
        ) : isSuuccessAgainCode ? (
          <span className="text-[13px] yekanBold text-[#5C9798] flex justify-center mt-6">
            کد با موفقیت ارسال شد
          </span>
        ) : minutes === 0 && seconds === 0 ? (
          <span
            onClick={codeAgain}
            className="flex justify-center text-[13px] mt-6 text-[#5C9798] cursor-pointer yekanBold"
          >
            ارسال مجدد کد
          </span>
        ) : (
          <h6 className="flex  justify-center gap-1 text-xs mt-6 yekanBold text-gray-600">
            ارسال مجدد کد تأیید تا{" "}
            <span className="text-[#4f4949] text-[14px] text-md">
              {minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>{" "}
            ثانیه دیگر
          </h6>
        )}
      </div>
    </div>
  );
};

export default VerifyCode;
