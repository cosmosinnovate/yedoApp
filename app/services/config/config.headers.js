import { getAuthToken } from "../store/store.token";

export const configOption = async (goodToken) => {
  const jwt = await getAuthToken(goodToken);
  const token = jwt ? jwt : "";
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
