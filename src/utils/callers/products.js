const { getOptions, ROWS_PER_PAGE } = require("../constants");

export async function getProducts(
  apiEndPoint,
  skip = 0,
  limit = ROWS_PER_PAGE,
  query = ""
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
      headers: { skip, limit },
    });
    const data = await response.json();
    if (!response.ok) {
      return { ...data, status: response.status };
    }
    return { ...data, status: response.status };
  } catch (error) {
    return {
      errorMessage: "Product's session can't store !",
      status: 400,
    };
  }
}
