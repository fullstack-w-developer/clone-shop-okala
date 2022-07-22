import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const sidebarState = atom({
  key: "sidebar_State",
  default: false,
});
export const categoryToggleState = atom({
  key: "category_state",
  default: false,
});
export const modalInfoProduct = atom({
  key: "info_product",
  default: false,
});
export const cardShopOpenSidebarState = atom({
  key: "card_open_sidebar_shop",
  default: false,
});
export const cardShopState = atom({
  key: "card",
  default: [],
  effects_UNSTABLE: [persistAtom],
  
});

