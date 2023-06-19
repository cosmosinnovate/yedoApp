import { useContext, useState } from "react";
import taskClient from "../services/api/api.client.task";
import { AuthContext } from "../services/store/store.context";

function useTask() {
  const [data, setData] = useState(null);
  const [taskLoading, setTaskLoading] = useState(false);

  const handleRequest = async (requestFunc, ...params) => {
    setTaskLoading(true);
    try {
      const response = await requestFunc(...params);
      console.log(response?.data);
      setData(response.data);
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setTaskLoading(false);
    }
  };

  const getTasks = async () => {
    await handleRequest(taskClient.getTasks);
  };

  const getTask = async (id) => {
    await handleRequest(taskClient.getTask, id);
  };

  const createNewTask = async (data) => {
    await handleRequest(taskClient.createNewTask, data);
  };

  return {
    taskLoading,
    getTask,
    getTasks,
    data,
    createNewTask
  };
}

export default useTask;
