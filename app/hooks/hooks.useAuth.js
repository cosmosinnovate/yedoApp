import { useContext, useState } from "react";
import authClient from "../services/api/api.client.auth";
import userClient from "../services/api/api.client.user";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../services/store/store.context";
import { getUserId, saveAuthToken } from "../services/store/store.token";

function useAuth() {
  const [data, setData] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const handleRequest = async (requestFunc, ...params) => {
    setAuthLoading(true);
    const requestFuncName = requestFunc.name.toString();
    try {
      const response = await requestFunc(...params);
      
      if (response.data.data?.jwToken) {
        const authToken = response.data.data?.jwToken;
        await saveAuthToken(authToken);
        if (requestFuncName.toString() === 'confirmCode') {
          const user = jwtDecode(authToken);
          authContext.setUser(user);
        }
      }

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
