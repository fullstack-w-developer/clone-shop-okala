import mongoose from "mongoose";

const OffProductModel = new mongoose.Schema(
  {
    img: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      required: true,
    },
    company: {
      img: String,
      name: String,
    },
    rate: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    off: {
      type: Number,
      required: true,
    },
    property: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userComments: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const OffProducts =
  mongoose.models.offProduct ||
  mongoose.model("offProduct", OffProductModel);

export default OffProducts;
