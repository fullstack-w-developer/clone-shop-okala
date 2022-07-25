import React from "react";
import Image from "next/image";
import Image1 from "./../assests/images/1.png";
import Image2 from "./../assests/images/2.png";
import Image3 from "./../assests/images/3.png";
import Image4 from "./../assests/images/4.png";
import Image5 from "./../assests/images/5.png";
import Image6 from "./../assests/images/6.png";
const Banners = () => {
  const banners = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-9 gap-x-4 mt-7 lg:mt-14">
      {banners.map((image: any, index: number) => {
        return (
          <div
            className=" relative h-28 lg:h-44"
            key={index}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="fill"
              className="rounded-lg "
            />
          </div>
        );
      })}
    </div>
  );
};

export default Banners;
