import axios from "axios";
import { END_POINTS } from "../uri";
import { request } from "../request.axios";

export async function createNewTask(data, token) {
    return await request(END_POINTS.TASKS, token, "post", data);
  }

export async function getTask(id, token) {
    return await request(`${END_POINTS.TASKS}/${id}`, token, "get");
  }

export async function getTasks(category, status = false, page = 1, limit, token) {
    console.log('CATEGORY: ', token);
    const url = `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}`
    // TODO: Uncomment this when the API is ready
    // : `${END_POINTS.TASKS}?status=${status}&page=${page}&limit=${limit}&category=${category}`;
    return await request(url, token, "get");
  }

export async function markTaskAsCompleted(id, status, token) {
    return await request(`${END_POINTS.TASKS}/${id}`, token, "put", { status: status });
  }

export async function deleteTask(id, token) {
    return await request(`${END_POINTS.TASKS}/${id}`, token, "delete");
  }