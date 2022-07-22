import { NextApiRequest, NextApiResponse } from "next";
import { userInfo } from "os";
import Login from "../../../models/login";
import connnectDB from "../../../utils/connectDB";
import { createAccessToken } from "../../../utils/generateToken";

connnectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case "POST":
      return verifyFun(req, res);
      break;
  }
};

const verifyFun = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { phone, code } = req.body;

    const user = await Login.findOne({ phone });
    if (!user)
      return res
        .status(400)
        .json({ message: "Invalid phone number" });
    // @ts-ignore
    if (user.code !== code)
      return res
        .status(400)
        .json({ message: "Invalid code" });

    const accessToken = await createAccessToken({ id: user._id });

    res
      .status(200)
      .json({ message: "Login successful", accessToken });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
