import connectDB from "@/libs/mongodb";
import products from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = params;
  try {
    await connectDB();
    const data = await products.findById(id);
    if (!data) {
      return NextResponse.json(
        { errorMessage: "product doesn't exist" },
        { status: 404 }
      );
    }
    return NextResponse.json({ product: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        errorMessage: "Server Failure",
        serverError: error.message,
        Ø,
      },
      { status: 500 }
    );
  }
}
