import axios from "axios";
import { configOption } from "../config/config.headers";
import { END_POINTS } from "../api/api.endpoints";

export const request = async (endpoint, method, data) => {
  console.log("ENDPOINT: ", endpoint, "METHOD: ", method, "DATA: ", data);
  const url = `${END_POINTS.BASE_URL}${endpoint}`;
  try {
    const headers = await configOption();
    if(method === "get" || method === "delete") {
      return await axios[method](url, headers);
    } else {
      return await axios[method](url, data, headers);
    }
  } catch(error) {
    console.error("ERROR: ", error);
    throw error;
  }
};
