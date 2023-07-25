import axios from "axios";
import { END_POINTS } from "./uri";
import { getJWToken } from "./token";


export const request = async (endpoint, method, data) => {
  const url = `${END_POINTS.BASE_URL}${endpoint}`;
  const token = await getJWToken();

  try {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ? token : ''}`,
      },
    }

    if (method === "get" || method === "delete") {
      return await axios[method](url, headers);
    } else {
      return await axios[method](url, data, headers);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
