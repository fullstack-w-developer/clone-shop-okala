import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#5c9798",
    fontFamily: "reqularyekan",
    fontSize: "13px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#5C9798",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00000040",
    },
    "&:hover fieldset": {
      borderColor: "#00000090",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5C9798",
    },
  },
});

interface props {
  verifyPhone: () => void;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  isLoadingPhone: boolean;
}
const Sign = ({
  verifyPhone,
  setPhone,
  phone,
  isLoadingPhone,
}: props) => {
  const onchangePhoneNumber = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhone(e.target.value);
  };
  return (
    <div className="flex-[5] flex justify-center flex-col gap-1">
      <h4 className="text-gray-900 text-lg yekanBold">
        ورود / ثبت نام
      </h4>
      <p className="text-gray-600 text-[0.75rem] yekanBold">
        لطفا شماره موبایل خود را وارد نمایید
      </p>
      <div className="mt-7  w-[25rem]">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <CssTextField
              label="شماره موبایل"
              id="custom-css-outlined-input"
              className="w-full"
              value={phone}
              onChange={onchangePhoneNumber}
              autoComplete="off"
            />
          </ThemeProvider>
        </CacheProvider>
        <button
          onClick={verifyPhone}
          className="w-full bg-[#F01436] hover:bg-[#da1532] transition-all py-3 rounded-lg text-white mt-6"
        >
          {isLoadingPhone
            ? "در حال ارسال..."
            : "ثبت و ادامه"}
        </button>
        <p className="text-xs mt-6">
          <Link href="/">
            <a className="text-[#5C9798] underline hover:text-[#446e6f]">
              شرایط استفاده از خدمات و حریم خصوصی{" "}
            </a>
          </Link>
          <span>را می پذیرم</span>
        </p>
      </div>
    </div>
  );
};

export default Sign;
