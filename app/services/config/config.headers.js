import { getJWToken } from "../store/store.token";

export const configOption = async (goodToken) => {
  const jwt = await getJWToken(goodToken);
  const token = jwt ? jwt : "";
  console.log("token", token);
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
