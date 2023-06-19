import { END_POINTS } from "./api.endpoints";
import { request } from "../request/request.axios";

export default class UserClient {

  static async getUser(id) {
    return request(`${END_POINTS.USERS}/${id}`, 'get');
  }

  static async updateUser(data, id) {
    return request(`${END_POINTS.USERS}/${id}`, 'patch', data);
  }

  static async createGroup(data) {
    return request(`${END_POINTS.GROUPS}`, 'post', data);
  }

  static async uploadOrUpdateImage(data) {
    return request(`${END_POINTS.LOGIN}`, 'post', data);
  }
}

