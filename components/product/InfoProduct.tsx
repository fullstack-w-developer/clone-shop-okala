import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalInfoProduct } from "../../atom/atom";
import style from "./../../styles/modal.module.css";
import InfoMobile from "./InfoMobile";
import MdInfoProduct from "./MdInfoProduct";
import { useRouter } from "next/router";
import { getProductByIdAPi } from "../../utils/API";

const InfoProduct = () => {
  const [open, setOpen] = useRecoilState(modalInfoProduct);
  const [isLoading, setIsloading] = useState(false);
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const id = router.query.product;
    setIsloading(true);
    getProductByIdAPi(id).then((res) => {
      setIsloading(false);
      setProduct(res.data.product);
    });
  }, [router.query]);

  const closeModal = async () => {
   await router.push("/");
    setOpen(!open);
  };
  return (
    <div className="hidden md:block">
      <Modal
        isOpen={open}
        className={style.Modal}
        overlayClassName={style.Overlay}
        onRequestClose={closeModal}
      >
        <InfoMobile
          product={product}
          closeModal={closeModal}
        />
        {}
        <MdInfoProduct
          product={product}
          closeModal={closeModal}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
};

export default InfoProduct;
