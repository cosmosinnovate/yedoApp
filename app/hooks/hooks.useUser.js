import { useContext, useState } from "react";
import userClient from "../services/api/api.client.user";
import { AuthContext } from "../services/store/store.context";
import { getUserId, storeJWToken } from "../services/store/store.token";

function useUser() {
  const [userData, setUserData] = useState(null);
  const [userDataLoading, setUserDataLoading] = useState(false);

  const handleRequest = async (requestFunc, ...params) => {
    setUserDataLoading(true);
    try {
      const response = await requestFunc(...params);
      setUserData(response.data);
    } catch (error) {
      setUserData(error.response?.data);
    } finally {
      setUserDataLoading(false);
    }
  };

  /**
   * takes in a user id
   * @param id
   */
  const getUser = async (id) => {
    await handleRequest(userClient.getUser, id);
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

  const markUserForDeletion = async (id) => {
    await handleRequest(userClient.markUserForDeletion, id);
  };

  return {
    getUser,
    userData,
    updateUser,
    userDataLoading,
    markUserForDeletion,
  };
}

export default useUser;
