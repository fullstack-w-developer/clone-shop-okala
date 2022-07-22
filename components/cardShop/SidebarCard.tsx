import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";
import {
  cardShopOpenSidebarState,
  cardShopState,
} from "../../atom/atom";
import CardImage from "./../../assests/images/card.webp";
import CardShop from "./CardShop";
const SidebarCard = () => {
  const toggleSidebar = useRecoilValue(
    cardShopOpenSidebarState
  );
  const [cart, setCart] = useState([]);

  const shopCard = useRecoilValue(cardShopState);

  useEffect(() => {
    setCart(shopCard);
  }, [shopCard]);

  const clearAllCart = () => {
    setRecoil(cardShopState, []);
  };

  const deleteProductFromCart = (propduct: any) => {
    let arr = [];
    const deleteProduct = cart.filter(
      (item: any) => item._id !== propduct._id
    );
    arr = [...deleteProduct];
    setRecoil(cardShopState, arr);
  };
  return (
    <div className="flex items-center w-full h-full ">
      {/* menu */}
      <div
        className={`fixed top-0 left-0 h-screen overflow-auto  transition-all duration-500 !z-[9999999] w-[500px] pb-4 bg-white scroll-sidebar ${
          toggleSidebar
            ? "translate-x-0"
            : "-translate-x-full"
        } `}
      >
        {/* close btn sidebar && text  */}

        <div className="shadow-sm sticky top-0 bg-white z-50">
          <div className="flex justify-between items-center text-gray-900 px-2 py-4 border-b border-gray-100 ">
            <p>سبد خرید شما</p>
            <div
              onClick={() =>
                setRecoil(
                  cardShopOpenSidebarState,
                  !toggleSidebar
                )
              }
              className="flex items-center gap-1 rounded-md cursor-pointer text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-1"
            >
              <RiCloseFill size={20} />
              <p className="text-sm">بستن</p>
            </div>
          </div>
          {cart.length !== 0 && (
            <div className="flex items-center justify-between px-2 py-4">
              <p>{cart.length} کالا</p>
              <div
                onClick={clearAllCart}
                className="flex items-center gap-1 rounded-md cursor-pointer hover:bg-gray-200 py-1 px-2  text-gray-700 "
              >
                <MdDelete size={20} />
                <p className="text-xs">حذف همه</p>
              </div>
            </div>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col h-full justify-center items-center gap-4">
            <Image src={CardImage} objectFit="contain" />
            <p className="text-gray-600 text-xs">
              درحال حاضر سبد خرید شما خالی است!
            </p>
            <p className="text-gray-500 text-sm">
              کالاهایی که دوست داری داشته باشی رو بهش اضافه
              کن
            </p>
          </div>
        ) : (
          cart.map((item, index) => {
            return (
              <CardShop
                deleteProductFromCart={() =>
                  deleteProductFromCart(item)
                }
                key={index}
                product={item}
              />
            );
          })
        )}
        {/* empty card */}
      </div>
      {/* overlay */}
      <div
        onClick={() =>
          setRecoil(
            cardShopOpenSidebarState,
            !toggleSidebar
          )
        }
        className={`fixed top-0 left-0 !z-[999999] ${
          toggleSidebar
            ? " h-screen w-full bg-[#00000040]"
            : "w-0 h-0"
        }`}
      ></div>
    </div>
  );
};

export default SidebarCard;
