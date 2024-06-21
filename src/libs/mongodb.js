import products from "@/models/products";
import mongoose from "mongoose";
let isConnected = false;

const connectDB = async () => {
  delete mongoose.connection.models["user"];

  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URL);

    var product_indexes = await products.collection.getIndexes();
    if (!product_indexes.hasOwnProperty("productname_text_description_text")) {
      await products.collection.createIndex({
        productname: "text",
        description: "text",
      });
    }
  } catch (error) { }
  isConnected = true;
};

export default connectDB;
