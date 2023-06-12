import axios from "axios";
import { configOption } from "../config/config.headers";

export const request = async (url, method, data) => {
  const headers = await configOption();
  console.log("HEADERS: ", headers.headers);
  if(method === "get" || method === "delete") {
    return await axios[method](url, headers);
  } else {
    return await axios[method](url, data, headers);
  }
};
