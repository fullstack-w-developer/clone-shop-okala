import { NextApiRequest, NextApiResponse } from "next";
import Login from "../../../models/login";
import connnectDB from "../../../utils/connectDB";

connnectDB();
export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "POST":
      return LoginFun(req, res);
      break;
  }
};

const LoginFun = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { phone } = req.body;
    const checkUser = await Login.findOne({ phone });
    const code = Math.floor(Math.random() * 90000) + 10000;

    if (checkUser) {
      await Login.updateOne({ code });
      res.status(200).json({ message: "OK", code });
      return;
    } else {
      const user = new Login({ phone, code });
      await user.save();
      res.status(200).json({ message: "OK", code });
    }
  } catch (error) {
    console.log(error);
  }
};
