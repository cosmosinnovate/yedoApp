import { END_POINTS } from "../uri";
import { request } from "../request.axios";

export async function authRegistration(data) {
    return await request(END_POINTS.REGISTER, 'post', data, false);
  }

export async function authLogin(data) {
    return await request(END_POINTS.LOGIN, 'post', data, false);
  }

export async function authConfirmCode(otp) {
    return await request(END_POINTS.OTP_VERIFY, 'patch', otp);
  }

export async function authResendConfirmation(data) {
    return await request(END_POINTS.OTP_RESEND, 'patch', data);
}
