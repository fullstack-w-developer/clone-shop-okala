import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import connnectDB from "../../../utils/connectDB";
import OffProductsModel from "../../../models/offProducts";

connnectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "GET":
      getProductById(req, res);
      break;
  }
};

const getProductById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const id = req.query.id;
    const product = await OffProductsModel.findById(id);

    if (!product)
      return res
        .status(400)
        .json({ message: "Product not found" });

    res
      .status(200)
      .json({
        message: "Product find successfully ",
        product,
      });
  } catch (error) {
    console.log(error);
  }
};
