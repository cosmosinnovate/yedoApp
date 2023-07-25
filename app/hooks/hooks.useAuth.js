import { useState } from "react";
import authClient from "../services/api/api.client.auth";
import userClient from "../services/api/api.client.user";
import { getUserId, storeJWToken } from "../services/token";

function useAuth() {
  const [data, setData] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

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

  const login = async (data) => {
    await handleRequest(authClient.login, data);
  };
  const getUser = async (id) => {
    await handleRequest(userClient.getUser, id);
  };

  const register = async (data) => {
    await handleRequest(authClient.register, data);
  };

  const updateUser = async (data) => {
    const id = await getUserId();
    await handleRequest(userClient.updateUser, data, id);
    await getUser(id);
  };

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
