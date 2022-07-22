import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImagesAd } from "./data";

interface props {
  style: string;
}
const Ad = ({ style }: props) => {
  return (
    <div
      className={`${style} w-full h-full flex justify-between items-center`}
    >
      {ImagesAd.map((item: any, index: number) => {
        return (
          <div key={index} className={`relative w-full ad hover:scale-105 transition-all duration-1000`}>
            <Link href="/">
              <a>
                <Image
                  key={index}
                  src={item}
                  layout="fill"
                  className="rounded-xl"
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Ad;
