import axios from "axios";
import { END_POINTS } from "./api.endpoints";
import { request } from "../request/request.axios";

export default class TaskClient {
  static async createNewTask(data) {
    return await request(END_POINTS.TASKS, "post", data);
  }

  static async getTask(id) {
    return await request(END_POINTS.TASKS, "get", id);
  }

  static async getTasks() {
    return await request(END_POINTS.TASKS, "get");
  }

  static async markComplete(data) {
    return await request(END_POINTS.OTP_RESEND, "patch", data);
  }
}
