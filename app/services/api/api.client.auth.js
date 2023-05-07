import axios from "axios";
import { END_POINTS } from "./api.endpoints";
import storeState from "../store/store.token";

export default class AuthClient {

  static async registerUser(userInfo) {
    console.log("USER DATA: ", userInfo);
    try {
      return await axios.post(
        `${END_POINTS.BASE_URL}${END_POINTS.REGISTER}`,
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      return e;
    }
  }

  static async login(userInfo) {
    try {
      return await axios.post(
        `${END_POINTS.BASE_URL}${END_POINTS.LOGIN}`,
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  static async verifyAccount(otp) {
    const token = await storeState.getAuthToken();
    console.log("TOKEN: ", token);
    try {
      return await axios.post(
        `${END_POINTS.BASE_URL}${END_POINTS.OTP_VERIFY}`,
        otp,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      if (e.response) {
        console.log('Response data:', e.response.data);
      }
      return e.response;
    }
  }

  static async resendEmailConfirmation(userInfo) {
    const token = await storeState.getAuthToken();

    try {
      return await axios.post(
        "http://localhost:9000/api/auth/otp/resend",
        otpInfo,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
}
