import { useContext, useState } from "react";
import taskClient from "../services/endpoints/api.client.task";
import { useRecoilState } from "recoil";
import { taskListState } from "../services/atoms/tasks.atoms";

function useTask() {
  const [data, setData] = useState(null);
  const [taskLoading, setTaskLoading] = useState(false);
  const [taskList, setTaskList] = useRecoilState(taskListState)

  async function handleRequest(requestFunc, ...params) {
    setTaskLoading(true);
    try {
      const response = await requestFunc(...params);
      setData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    } 
    setTaskLoading(false);
  };

  async function getTasks() {
    const res = await handleRequest(taskClient.getTasks);
    console.log(res, 'List')
    // setTaskList((list) => [...list, data]);
  };

  async function markTaskAsCompleted(id) {
    await handleRequest(taskClient.markTaskAsCompleted, id);
  };

  async function deleteTask(id) {
    await handleRequest(taskClient.deleteTask, id);
  };

  async function getTask(id) {
    await handleRequest(taskClient.getTask, id);
  };

  async function createNewTask(data) {
    const res = await handleRequest(taskClient.createNewTask, data);
  };

  return {
    data,
    getTask,
    getTasks,
    deleteTask,
    taskLoading,
    createNewTask,
    markTaskAsCompleted
  };
}

export default useTask;
