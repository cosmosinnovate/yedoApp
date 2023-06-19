import { useContext, useState } from "react";
import authClient from "../services/api/api.client.auth";
import userClient from "../services/api/api.client.user";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../services/store/store.context";
import { getUserId, storeJWToken } from "../services/store/store.token";

function useAuth() {
  const [data, setData] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const handleRequest = async (requestFunc, ...params) => {
    setAuthLoading(true);
    const requestFuncName = requestFunc?.name.toString();
    try {
      const response = await requestFunc(...params);
      console.log("response", response.data.data.jwToken);
      if (response.data.data?.jwToken) {
        if (
          requestFuncName === "confirmCode" ||
          requestFuncName === "login" ||
          requestFuncName === "register"
        ) {
          jwt = response.data.data?.jwToken;
          await storeJWToken(response.data.data?.jwToken);
        }
      }

      // Every other request, we need to save the user data to context
      setData(response?.data);
    } catch (error) {
      setData(error?.response.data);
    } finally {
      setAuthLoading(false);
    }
  };

  /**
   * takes in a data object with email and password
   * @param {} data
   */
  const login = async (data) => {
    await handleRequest(authClient.login, data);
  };

  /**
   * takes in a user id
   * @param id
   */
  const getUser = async (id) => {
    await handleRequest(userClient.getUser, id);
  };

  const register = async (data) => {
    await handleRequest(authClient.register, data);
  };

  /**
   * takes in a data object
   * @param {*} data
   */
  const updateUser = async (data) => {
    const id = await getUserId();
    await handleRequest(userClient.updateUser, data, id);
    await getUser(id);
  };

  /**
   * takes in a otp
   * @param {*} otp
   */
  const confirmCode = async (otp) => {
    await handleRequest(authClient.confirmCode, otp);
  };

  return {
    authLoading,
    getUser,
    data,
    login,
    updateUser,
    register,
    confirmCode,
  };
}

export default useAuth;
