import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'jwToken';
async function executeSecureStoreCommand(command, ...args) {
  try {
    const result = await command(...args);
    return result;
  } catch (error) {
    return null;
  }
}

export async function storeToken(token) {
  await executeSecureStoreCommand(SecureStore.setItemAsync, key, token);
}

export async function getJWToken() {
  return await executeSecureStoreCommand(SecureStore.getItemAsync, key);
}

export async function getUserId() {
  const token = await getJWToken();
  return token ? jwtDecode(token).id : null;
}

// Removing the JWT token
export async function removeToken() {
  return await executeSecureStoreCommand(SecureStore.deleteItemAsync, key);
}
