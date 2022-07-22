import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Logo from "../components/auth/Logo";
import Sign from "../components/auth/Sign";
import VerifyCode from "../components/auth/VerifyCode";
import { LoginApi, VerifyCodeApi } from "../utils/API";

const auth = () => {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [interCode, setInterCode] = useState("");
  const [error, setError] = useState("");
  const [isLoadingPhone, setIsLodingPhone] =
    useState(false);
  const [isLoadingVerifyCode, setIsLodingVerifyCode] =
    useState(false);
  const router = useRouter();


  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      router.push("/")
    }
  },[])

  const verifyPhone = async () => {
    if (!phone) return;
    setIsLodingPhone(true);
    await LoginApi(phone).then((res) => {
      setIsLodingPhone(false);
      setInterCode(res.data.code);
    });
    return setStep(1);
  };

  const verifySubmit = async () => {
    if (code.length === 5) {
      setIsLodingVerifyCode(true)
      await VerifyCodeApi({ phone, code }).then((res) => {
        if (res.status === 400) {
          setIsLodingVerifyCode(false)
          setError("کد وارد شده اشتباه است");
        } else {
          setIsLodingVerifyCode(false)
          localStorage.setItem(
            "token",
            res.data.accessToken
          );
          router.push("/");
        }
      });
    }
  };
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <Logo />
      <div className="flex-[2] flex flex-col h-full w-full justify-between items-center">
        {step === 0 ? (
          <Sign
            setPhone={setPhone}
            phone={phone}
            verifyPhone={verifyPhone}
            isLoadingPhone={isLoadingPhone}
          />
        ) : (
          <VerifyCode
            interCode={interCode}
            verifySubmit={verifySubmit}
            setStep={setStep}
            setCode={setCode}
            phone={phone}
            verifyPhone={verifyPhone}
            setInterCode={setInterCode}
            isLoadingVerifyCode={isLoadingVerifyCode}
          />
        )}

        <div className="border-t w-[70%] pb-9 hidden lg:block">
          <ul className="w-[50%] mx-auto flex text-xs justify-between mt-4 text-gray-600 menu-auth">
            <li>
              <Link href="/">
                <a>درباره اُکالا</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>تماس با اُکالا</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>سوالات متداول</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>قوانین و مقررات</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default auth;
