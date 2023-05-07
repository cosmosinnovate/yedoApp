import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
const key = "authToken";

async function saveAuthToken(token) {
  console.log("SAVE AUTH TOKEN");
  try {
    return await SecureStore.setItemAsync(key, token);
  } catch (error) {
    return null;
  }
}

async function getAuthToken() {
  try {
    const token = await SecureStore.getItemAsync(key);
    return token;
  } catch (error) {
    return null;
  }
}

async function getUserId() {
  try {
    const token = await SecureStore.getItemAsync(key);
    return jwtDecode(token).sub;
  } catch (error) {
    return null;
  }
}

async function removeAuthToken() {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    return null;
  }
}

export default { saveAuthToken, getAuthToken, removeAuthToken, getUserId };