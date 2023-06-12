import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

async function executeSecureStoreCommand(command, ...args) {
  try {
    const result = await command(...args);
    if (result === null) {
      console.log(`SecureStore command: ${command.name} returned null`);
    }
    return result;
  } catch (error) {
    console.log(`Error executing SecureStore command: ${command.name}`, error);
    return null;
  }
}

export async function saveAuthToken(token) {
  return await executeSecureStoreCommand(SecureStore.setItemAsync, key, token);
}

export async function getAuthToken() {
  return await executeSecureStoreCommand(SecureStore.getItemAsync, key);
}

export async function getUserId() {
  const token = await getAuthToken();
  return token ? jwtDecode(token).id : null;
}

export async function removeAuthToken() {
  return await executeSecureStoreCommand(SecureStore.deleteItemAsync, key);
}
