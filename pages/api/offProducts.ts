import { OffProduct } from "./../../components/offProduct/data";
import { NextApiRequest, NextApiResponse } from "next";
import OffProductsModel from "../../models/offProducts";
import connnectDB from "../../utils/connectDB";

connnectDB();
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      getAllProduct(req, res);
      break;
    case "POST":
      postProduct(req, res);
      break;
  }
};

const getAllProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const OffProduct = await OffProductsModel.find();
    res.status(200).json({ message: "OK", OffProduct });
  } catch (error) {
    console.log(error);
  }
};

const postProduct = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const product = new OffProductsModel(req.body);

    await product.save();
    res.status(200).json({ message: "saved successfully" , });
  } catch (error) {
    console.log(error);
  }
};
