import React, { useContext, useEffect, useState } from "react";
import authClient from "../services/api/api.client.auth";
import userClient from "../services/api/api.client.user";
import jwtDecode from "jwt-decode";
import storeToken from "../services/store/store.token";
import { AuthContext } from "../services/store/store.context";

function useAuth(authCheck = false) {
  const [data, setData] = useState(null);
  const [dataError, setDataError] = useState(false);
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);


  useEffect(() => {
    console.log("USE-EFFECT");
    const checkAuth = async () => {
      const id = await storeToken.getUserId();
      if (id) {
        await getUser(id);
      }
    }
    checkAuth();
  }, [authCheck]);


  const logUser = async (userInfo) => {
    setLoading(true);
    console.log("Login: ", userInfo);
    const response = await authClient.login(userInfo);
    console.log("Login Response: ", response.status);

    if (response.status === 201) {
      console.log("Login Response: ", response.data);
      await storeToken.saveAuthToken(response.data.data.access_token);
      setData(response.data);
    } else {
      setData(response.data);
      setDataError(true);
    }
    setLoading(false);
  };

  const getUser = async (id) => {
    setLoading(true);
    const response = await userClient.getUserById(id);

    if (response.status === 200) {
      setData(response.data);
    } else {
      setData(response.data.data);
      setDataError(true);
    }

    setLoading(false);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    const response = await authClient.registerUser(userInfo);

    if (response.status === 201) {
      const user = jwtDecode(response.data.data.access_token);
      await storeToken.saveAuthToken(response.data.data.access_token);
      setData(response.data.data);

    } else {
      setData(response.data);
      setDataError(true);
    }

    setLoading(false);

  };

  const verifyAccount = async (otp) => {
    setLoading(true);
    const response = await authClient.verifyAccount(otp);
    console.log("VERIFY ACCOUNT: ", response.data);

    if (response.status === 200) {
      const user = jwtDecode(response.data.data.access_token);
      await storeToken.saveAuthToken(response.data.data.access_token);
      console.log("SUCCESSFUL VERIFIED: ", JSON.stringify(user, null, 2));
      setData(response.data.data);

    // }  if (response.status === 400) {      
    //   console.log("FAILED VERIFIED: ", JSON.stringify(response.data, null, 2));
    //   setData(response.data);
    //   setDataError(true);
    // }
      
    }  else {
      setData(response.data);
      setDataError(true);
    }

    setLoading(false);
    
  };

  return { loading, getUser, data, dataError, logUser, registerUser, verifyAccount };
}

export default useAuth;
