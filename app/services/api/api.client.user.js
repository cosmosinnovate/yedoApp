import { END_POINTS } from "../uri";
import { request } from "../request.axios";

export async function getUser(id) {
  return request(`${END_POINTS.USERS}/${id}`, 'get');
}

export async function updateUser(data, id) {
  return request(`${END_POINTS.USERS}/${id}`, 'patch', data);
}

export async function markUserForDeletion(id) {
  return request(`${END_POINTS.USERS}/${id}`, 'delete');
}
