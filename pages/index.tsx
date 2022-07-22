import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/cardShop/SidebarCard";
import Category from "../components/category/Category";

import Header from "../components/header/Header";
import { Menu } from "../components/menu/Menu";
import OffProductSlide from "../components/offProduct/OffProduct";
import InfoProduct from "../components/product/InfoProduct";
import Sidebar from "../components/sidebar/Sidebar";
import Ad from "../components/slider&&Ad/Ad";
import Slider from "../components/slider&&Ad/Slider";
import { typeMenuList } from "../interface";
import {
  getAllProductAPi,
  getListMenuSidebarApi,
} from "../utils/API";

const Home = ({
  menuListSidebar,
  OffProducts,
}: {
  menuListSidebar: any;
  OffProducts: any;
}) => {

  return (
    <div className="w-full">
      <Head>
        <title>
          سوپرمارکت آنلاین اکالا - فر.شگاه اینترنتی
        </title>
        <meta
          name="keywords"
          content="shop-online, okala"
        />
      </Head>
      <Header />
      {/* menu  */}
      <Menu />
      {/* slider && ad */}
      <div className="w-full px-3 xl:px-0 h-[25vh]  lg:h-[55vh] xl:w-[85%] mx-auto flex gap-4 justify-between items-center lg:mt-10">
        <Slider style="w-[96%] lg:w-[69%] mx-auto" />
        <Ad style="w-[31%] h-full hidden lg:block" />
      </div>
      {/* category */}
      <Category />
      {/* side bar menu */}

      {/* off product  */}
      <OffProductSlide  OffProducts={OffProducts}/>
      <Sidebar menuListSidebar={menuListSidebar} />
      {/* slider card shop */}
      <Card />
      <InfoProduct />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getListMenuSidebarApi();
  const OffProducts = await getAllProductAPi();

  // Pass data to the page via props
  return {
    props: {
      menuListSidebar: res.data.menuListSidebar,
      OffProducts: OffProducts.data.OffProduct,
    },
  };
}

export default Home;
