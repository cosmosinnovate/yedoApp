import axios from "axios";
import { END_POINTS } from "../uri";
import { request } from "../request/request.axios";

export default class TaskClient {
  static async createNewTask(data) {
    return await request(END_POINTS.TASKS, "post", data);
  }

  static async getTask(id) {
    return await request(`${END_POINTS.TASKS}/${id}`, "get");
  }

  static async getTasks(category, status = false, page = 1, limit) {
    console.log('Category', category);
    const url = `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}`
    // TODO: Uncomment this when the API is ready
    // : `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}&category=${category}`;
    return await request(url, "get");
  }

  static async markTaskAsCompleted(id, status) {
    return await request(`${END_POINTS.TASKS}/${id}`, "put", { status: status });
  }

  static async deleteTask(id) {
    return await request(`${END_POINTS.TASKS}/${id}`, "delete");
  }
}
