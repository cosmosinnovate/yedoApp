import { useContext, useState } from "react";
import authClient from "../services/api/api.client.auth";
import userClient from "../services/api/api.client.user";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../services/store/store.context";
import { getUserId, saveAuthToken } from "../services/store/store.token";

function useAuth(autoLoad = false) {
  const [data, setData] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const login = async (userInfo) => {
    setAuthLoading(true);
    try {
      const response = await authClient.login(userInfo);
      const authToken = response.data.data.jwToken;
      await saveAuthToken(authToken);
      setData(response.data);
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setAuthLoading(false);
    }
  };

  const getUser = async (id) => {
    setAuthLoading(true);
    try {
      const response = await userClient.getUser(id);
      setData(response.data);
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (userInfo) => {
    setAuthLoading(true);
    try {
      const response = await authClient.register(userInfo);
      const authToken = response.data.data.jwToken;
      await saveAuthToken(authToken);
      const user = jwtDecode(authToken);
      setData(response.data);
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setAuthLoading(false);
    }
  };

  const updateUser = async (user) => {
    setAuthLoading(true);
    try {
      const id = await getUserId();
      const response = await userClient.updateUser(user, id);
      setData(response.data);
      await getUser(id);
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setAuthLoading(false);
    }
  };

  const confirmCode = async (otp) => {
    setAuthLoading(true);
    try {
      const response = await authClient.confirmCode(otp);
      const authToken = response.data.data.jwToken;
      await saveAuthToken(authToken);
      const user = jwtDecode(authToken);
      authContext.setUser(user);
      setData(response.data);
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setAuthLoading(false);
    }
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
