import axios from "axios";
import { END_POINTS } from "./api.endpoints";
import storeState from "../store/store.token";

export default class UserClient {

  static async getUserById(id) {
    const token = await storeState.getAuthToken();
    try {
      return await axios.get(
          `${END_POINTS.BASE_URL}${END_POINTS.USERS}/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
      
      } catch (e) {
        console.log("--ERROR: ", e);
        return e;
      }
  }

  static async createGroup(groupInfo) {
    const token = await storeState.getAuthToken();
    try {
        return await axios.post(
          `${END_POINTS.BASE_URL}${END_POINTS.GROUPS}`,
          groupInfo,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
      } catch (e) {
        return e;
      }
  }

  static async uploadOrUpdateImage(userInfo) {
    const token = await storeState.getAuthToken();
    try {
      return await axios.post(
        `${END_POINTS.BASE_URL}${END_POINTS.LOGIN}`,
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
      return e;
    }
  }

}
