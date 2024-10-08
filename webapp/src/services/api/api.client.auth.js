import axios from "axios";
import {END_POINTS} from "../uri";
import {request} from "../request/request";

export default class AuthClient {
  static async register(data) {
    return await request(END_POINTS.REGISTER, "post", data, false);
  }

  static async login(data) {
    return await request(END_POINTS.LOGIN, "post", data, false);
  }

  static async resendConfirmation(data) {
    return await request(END_POINTS.OTP_RESEND, "patch", data);
  }
}
