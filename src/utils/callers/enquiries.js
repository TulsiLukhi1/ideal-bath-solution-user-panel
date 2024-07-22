import { FetchError } from "@/class/FetchError";
import { getOptions, postOptions } from "@/utils/constants";

export async function getEnquiriesByUserId(apiEndPoint, query) {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL || ""}/api${apiEndPoint}`
    );

    if (query) {
      url.searchParams.append("query", query);
    }

    const response = await fetch(url.toString(), {
      ...getOptions,
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

export async function createEnquiry(apiEndPoint, body) {
  try {
    const options = {
      ...postOptions,
      body: JSON.stringify(body),
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL || null}/api/${apiEndPoint}`,
      options
    );

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
