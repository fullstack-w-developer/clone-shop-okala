import React, { useState } from "react";
import { typeMenuList } from "../../interface";
import ItemSidebar from "./ItemSidebar";
import SubMenu from "./SubMenu";

const ItemsSidebar = ({
  menuListSidebar,
}: typeMenuList) => {
  return (
    <div className="mt-5 flex flex-col gap-1">
      {menuListSidebar.map((item: any, index: number) => {
        return (
          <ItemSidebar key={index} name={item.title}>
            {item.names.map((item: any, index: number) => {
              return <SubMenu key={index} item={item} />;
            })}
          </ItemSidebar>
        );
      })}
    </div>
  );
};

export default ItemsSidebar;
