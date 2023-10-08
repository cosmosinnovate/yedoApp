import axios from "axios";
import {configOption} from "../config/config.headers";
import {END_POINTS} from "../uri";

export const request = async (endpoint, method, data, autoLoad = true) => {
  console.log('Data', data);
  const url = `${END_POINTS.BASE_URL}${endpoint}`;
  try {
    const headers = await configOption(autoLoad);
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
