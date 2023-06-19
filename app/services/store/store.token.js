import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "jwToken";

/**
 * 
 * @param command function to execute
 * @param  {...any} args to pass to the function
 * @returns 
 */
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

/**
 * 
 * @param token jwt token 
 * @returns 
 */
export async function storeJWToken(token) {
  return await executeSecureStoreCommand(SecureStore.setItemAsync, key, token);
}

/**
 * 
 * @param goodToken value true if you want to get the token, false if you want to get an empty string
 * @returns jwt token or empty string
 */
export async function getJWToken(goodToken) { 
  return goodToken ? await executeSecureStoreCommand(SecureStore.getItemAsync, key) : ''
}

/**
 * 
 * @returns user id from jwt token
 */
export async function getUserId() {
  const token = await getJWToken(true);
  return token ? jwtDecode(token).id : null;
}

/**
 * Remove the jwt token from local storage
 */
export async function removeJWToken() {
  return await executeSecureStoreCommand(SecureStore.deleteItemAsync, key);
}
