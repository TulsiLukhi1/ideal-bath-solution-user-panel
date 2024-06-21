import connectDB from "@/libs/mongodb";
import products from "@/models/products";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const headerList = headers();

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  let offset = headerList.get("offset") ? +headerList.get("offset") : 0;

  try {
    await connectDB();
    const responseBody = { products: [], totalProducts: 0 };

    if (query) {
      const searchQuery = { $text: { $search: query } };
      responseBody.products = await products
        .find(searchQuery)
        .skip(offset);
      responseBody.totalProducts = await products.countDocuments(searchQuery);
    } else {
      responseBody.products = await products
        .find({})
        .skip(offset);
      responseBody.totalProducts = await products.countDocuments();
    }

    return NextResponse.json({ ...responseBody }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        errorMessage: "Server Failure",
        serverError: error.message,
      },
      { status: 500 }
    );
  }
}
