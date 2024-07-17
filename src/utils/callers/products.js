import { FetchError } from "@/class/FetchError";
import { getOptions } from "@/utils/constants";

export async function getProducts(
  apiEndPoint,
  skip = 0,
  limit = ROWS_PER_PAGE,
  query = "",
  filter = []
) {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL || ""}/api${apiEndPoint}`
    );

    if (query) {
      url.searchParams.append("query", query);
    }

    const response = await fetch(url.toString(), {
      ...getOptions,
      headers: { skip, limit, brandIds: filter },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new FetchError(data.errorMessage, response.status);
    }
    return { ...data, status: response.status };
  } catch (error) {
    return {
      errorMessage: error.message,
      status: error.status ? error.status : 400,
    };
  }
}

export async function getProductById(productId) {
  try {
    const apiEndPoint = `/products/${productId}`;
    const url = new URL(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL || ""}/api${apiEndPoint}`
    );

    const response = await fetch(url.toString(),{
      ...getOptions
    });

    const data = await response.json();

    if (!response.ok) {
      throw new FetchError(
        data.errorMessage || "Failed to fetch product",
        response.status
      );
    }

    return { product: data.product, status: response.status };
  } catch (error) {
    return {
      errorMessage: error.message,
      status: error.status || 500,
    };
  }
}
