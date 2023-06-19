import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

async function executeSecureStoreCommand(command, ...args) {
  try {
    const result = await command(...args);
    if (result === null) {
    }
    return result;
  } catch (error) {
    return null;
  }
}

export async function saveAuthToken(token) {
  return await executeSecureStoreCommand(SecureStore.setItemAsync, key, token);
}

export async function getAuthToken(goodToken) { 
  return goodToken ? await executeSecureStoreCommand(SecureStore.getItemAsync, key) : ''
}

export async function getUserId() {
  const token = await getAuthToken(true);
  return token ? jwtDecode(token).id : null;
}

export async function removeAuthToken() {
  return await executeSecureStoreCommand(SecureStore.deleteItemAsync, key);
}
