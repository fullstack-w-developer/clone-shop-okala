import jwt from "jsonwebtoken";

export const createAccessToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(
    payload,
    "TGYBUKEJRKSLHCBYTDCEVAUYBIKH7YXFDI7DBYU34I",
    { expiresIn: "7d" }
  );
};


