import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
