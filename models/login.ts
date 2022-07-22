import mongoose from "mongoose";

const LoginModel = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      maxLength: 11,
      minLength: 11,
    },
    code: {
      type: String,
      maxLength: 5,
      minLength: 5,
    },
  },
  { timestamps: true }
);

const Login =
  mongoose.models.login ||
  mongoose.model("login", LoginModel);

export default Login;
