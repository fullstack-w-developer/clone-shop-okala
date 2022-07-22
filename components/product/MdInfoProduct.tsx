import React from "react";
import { MdOutlineClose } from "react-icons/md";
import MdSlide from "./MdSlide";

interface props {
  closeModal: () => void;
  product: any;
  isLoading: boolean;
}
const MdInfoProduct = ({
  closeModal,
  product,
  isLoading,
}: props) => {
  return (
    <div className="hidden md:block">
      {isLoading ? (
        <span className="flex justify-center items-center text-xs txet-gray-500 pt-10">در حال بار گذاری...</span>
      ) : (
        <>
          <div
            onClick={closeModal}
            className="flex justify-end m-3 cursor-pointer"
          >
            <span className="border  flex justify-end items-center w-fit p-2 rounded-lg">
              <MdOutlineClose
                size={25}
                className="text-gray-500"
              />
            </span>
          </div>

          <MdSlide product={product} />
        </>
      )}
    </div>
  );
};

export default MdInfoProduct;
