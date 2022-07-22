import axios from "axios";

const api = axios.create({
  baseURL: "https://clone-shop-okala.vercel.app/api/",
});

export const getListMenuSidebarApi = () =>
  api.get(`sidebar`);
export const LoginApi = (phone: string) =>
  api.post(`auth`, {
    phone,
  });

export const codeAgainApi = (phone: string) =>
  api.post(`auth`, {
    phone,
  });

export const VerifyCodeApi = ({
  phone,
  code,
}: {
  phone: string;
  code: string;
}) =>
  api.post(`auth/verify`, {
    phone,
    code,
  });

export const getAllProductAPi = () =>
  api.get("/offProducts");


export const getProductByIdAPi = (id: any) =>
  api.get(`/product/${id}`);
