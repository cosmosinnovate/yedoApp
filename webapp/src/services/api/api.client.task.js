import axios from "axios";
import { END_POINTS } from "../uri";
import { request } from "../request/request";

export default class TaskClient {
  static async createNewTask(data) {
    return await request(END_POINTS.TASKS, "post", data);
  }

  static async getTask(id) {
    return await request(`${END_POINTS.TASKS}/${id}`, "get");
  }

  static async getTasks(category, status = false, page = 1, limit) {
    console.log('Category', category);
    const url =
      category === "all"
        ? `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}`
        : `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}&category=${category}`;
    return await request(url, "get");
  }

  static async markTaskAsCompleted(id) {
    console.log('ID', id);
    return await request(`${END_POINTS.TASKS}/${id}`, "put", { status: true });
  }

  static async deleteTask(id) {
    return await request(`${END_POINTS.TASKS}/${id}`, "delete");
  }
}
