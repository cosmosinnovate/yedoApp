import axios from "axios";
import { END_POINTS } from "./api.endpoints";
import storeState from "../store/store.token";
import { request } from "../request/request.axios";

export default class AuthClient {
  static async register(userInfo) {
    console.log("USER DATA: ", userInfo);
    return await this.post(END_POINTS.REGISTER, userInfo);
  }

  static async login(userInfo) {
    return await this.post(END_POINTS.LOGIN, userInfo);
  }

  static async confirmCode(otp) {
    return await this.post(END_POINTS.OTP_VERIFY, otp);
  }

  static async resendConfirmation(otpInfo) {
    return this.post(END_POINTS.OTP_RESEND, otpInfo);
  }

  static async post(endpoint, body) {
    try {
      return await request(`${END_POINTS.BASE_URL}${endpoint}`, "post", body);
    } catch (error) {
      console.error(error);
      throw error; // propagate the error up
    }
  }
}
