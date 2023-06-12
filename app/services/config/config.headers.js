import { getAuthToken } from "../store/store.token";

export const configOption = async () => {
  const jwt = await getAuthToken();
  const token = jwt ? jwt : "";
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
