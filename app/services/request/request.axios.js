import axios from "axios";
import { configOption } from "../config/config.headers";
import { END_POINTS } from "../api/api.endpoints";

export const request = async (endpoint, method, data, autoLoad = true) => {
  const url = `${END_POINTS.BASE_URL}${endpoint}`;
  try {
    const headers = await configOption(autoLoad);
    if(method === "get" || method === "delete") {
      return await axios[method](url, headers);
    } else {
      return await axios[method](url, data, headers);
    }
  } catch(error) {
    throw error;
  }
};
