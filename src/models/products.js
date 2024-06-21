import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productname: { type: String, required: true },
    description: { type: String },
    imgUrl: { type: String },
    imgName: { type: String },
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.product ||
  mongoose.model("product", ProductSchema);
