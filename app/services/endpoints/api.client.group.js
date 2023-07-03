import axios from "axios";
import { END_POINTS } from "../uri";
import storeState from "../store/store.token";
import { request } from "../request/request.axios";

export default class UserClient {

  static async getUser(id) {
    const url = `${END_POINTS.BASE_URL}${END_POINTS.USERS}/${id}`;
    return request(url, 'get');
  }

  static async updateUser(data, id) {
    const url = `${END_POINTS.BASE_URL}${END_POINTS.USERS}/${id}`;
    return request(url, 'post', data);
  }

  static async createGroup(data) {
    const url = `${END_POINTS.BASE_URL}${END_POINTS.GROUPS}`;
    return request(url, 'post', data);
  }

  static async uploadOrUpdateImage(data) {
    const url = `${END_POINTS.BASE_URL}${END_POINTS.LOGIN}`;
    return request(url, 'post', data);
  }
}

