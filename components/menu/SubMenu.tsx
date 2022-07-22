import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";
import { categoryToggleState } from "../../atom/atom";
import MenuItems from "./MenuItems";
import { tabListMenu } from "./data";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const SubMenu = () => {
  const togglepenMenu = useRecoilValue(categoryToggleState);
  const [tabMenu, setTabMenu] = useState<number>(0);
  const [tabSubMenu, setTabSubMenu] = useState<number>(0);

  const hoverMenuItem = (i: any) => {
    setTabMenu(i);
  };
  const onHoverSubMenuItem = (i: any) => {
    setTabSubMenu(i);
  };
  return (
    <>
      <div className="flex justify-center items-center sticky top-[5.1rem] z-50">
        <div
          onClick={() =>
            setRecoil(categoryToggleState, !togglepenMenu)
          }
          className={`fixed w-full bg-[#00000030] h-[100vw] z-30   ${
            togglepenMenu
              ? "transition-all translate-x-0"
              : "translate-x-full"
          }`}
        ></div>
        <div
          className={`w-[99%] xl:w-[85%] bg-white  rounded-b-lg z-[9999]  ${
            togglepenMenu ? "block" : "hidden"
          }`}
        >
          <div className="w-full bg-[#E6E6E6] flex  pt-4 gap-6 px-4  ">
            {tabListMenu.map((item: any, index: number) => {
              return (
                <MenuItems
                  key={index}
                  name={item.name}
                  hoverMenuItem={() => hoverMenuItem(index)}
                  style={
                    index === tabMenu &&
                    "text-red-500 border-b-2 border-red-600"
                  }
                />
              );
            })}
          </div>
          <div className="flex h-[70vh]">
            <div className="flex-1">
              {tabListMenu[tabMenu].tabListSubMenu.map(
                (item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      onMouseEnter={() =>
                        onHoverSubMenuItem(index)
                      }
                      className={`flex justify-between items-center text-[13px] px-3  py-4 cursor-pointer ${
                        tabSubMenu === index &&
                        " bg-[#f0f0f0] text-red-500"
                      }`}
                    >
                      <div
                        className={`flex gap-3 items-center`}
                      >
                        <div className=" !bg-[#f0f0f0] w-8 h-8 rounded-lg flex  justify-center items-center">
                          {item.icon}
                        </div>
                        <p>{item.name}</p>
                      </div>
                      <IoIosArrowBack size={20} />
                    </div>
                  );
                }
              )}
            </div>
            <div className="flex-[4] box h-full px-6 pt-2">
              {tabListMenu[tabMenu].tabListSubMenu[
                tabSubMenu
              ].listProduct.map(
                (item: any, index: number) => {
                  return (
                    <div key={index}>
                      <div className="flex mt-5">
                        <div className="bg-red-400 w-[0.14rem]"></div>
                        <p className="text-sm text-slate-700 pr-2">
                          {item.title}
                        </p>
                      </div>
                      <div className="mt-3">
                        {item.subListProduct.map(
                          (item: any, index: number) => {
                            return (
                              <div
                                key={index}
                                className="py-3"
                              >
                                <Link href="/" key={index}>
                                  <a className="text-gray-500 text-[12px]">{item.name}</a>
                                </Link>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubMenu;
