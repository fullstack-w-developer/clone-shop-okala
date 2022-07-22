import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { token } from "stylis";
import {
  cardShopOpenSidebarState,
  cardShopState,
} from "../../atom/atom";
import UserOptionLogin from "./UserOptionLogin";
const HeaderLeft = () => {
  const [hasLogin, setHasLogin] = useState(false);
  const [openSidebar, setOpenSidebar] = useRecoilState(
    cardShopOpenSidebarState
  );
  const [lengthCart, setLengthCart] = useState(0);
  const shopCart = useRecoilValue(cardShopState);

  const router = useRouter();
  const LinkTLoginSignup = () => {
    router.push("/auth");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasLogin(true);
    } else {
      setHasLogin(false);
    }
  }, [token]);

  useEffect(() => {
    setLengthCart(shopCart.length);
  }, [shopCart]);

  return (
    <div>
      <div className=" items-center gap-4 hidden lg:flex">
        {hasLogin ? (
          <UserOptionLogin />
        ) : (
          <button
            onClick={LinkTLoginSignup}
            className="flex gap-2 items-center hover:bg-gray-300 transition-all bg-gray-200 text-gray-800 p-3 rounded-xl"
          >
            <BiUser size={25} />
            <span className="text-sm">ورود / ثبت نام</span>
          </button>
        )}

        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          className="p-3 bg-[#E0F2F4] transition-all relative hover:bg-[#98dbdc] rounded-xl"
        >
          <AiOutlineShoppingCart
            size={25}
            className="text-[#02A0A4]"
          />
          {lengthCart === 0 ? (
            ""
          ) : (
            <span className="absolute top-1 right-2 bg-[#F01436] w-[1.2rem] h-[1.2rem] flex justify-center items-center text-white text-xs rounded-full">
              {lengthCart}
            </span>
          )}
        </button>
      </div>
      <a
        href="tel:9052549459"
        className="flex lg:hidden items-center gap-2 bg-gray-100 py-1 px-3 rounded-xl"
      >
        <BsHeadset size={21} className="text-gray-700" />
        <p>۱۵۴۴</p>
      </a>
    </div>
  );
};

export default HeaderLeft;
