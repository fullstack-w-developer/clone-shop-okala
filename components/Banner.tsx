import Image from "next/image";
import React from "react";
import ImageBanner from "./../assests/images/banner.png";

const Banner = () => {
  return (
    <div className="relative h-28 lg:h-44">
      <Image
        src={ImageBanner}
        layout="fill"
        objectFit="fill"
        className="rounded-lg "
      />
    </div>
  );
};

export default Banner;
