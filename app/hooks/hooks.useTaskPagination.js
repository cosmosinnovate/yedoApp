import { useState } from "react";
import taskClient from "../services/endpoints/api.client.task";
import { useSetRecoilState } from "recoil";
import { taskListState } from "../services/atoms/tasks.atoms";

/***
 * TODO: 
 * Add complete task functionality
 * Add delete task functionality
 * Add pagination
 * Add search
 * Add sort
 * 
 */

const ITEMS_PER_PAGE = 10;

const useTaskPagination = (initialPage = 1) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [allDataFetched, setAllDataFetched] = useState(false);
  const setTaskList = useSetRecoilState(taskListState)

  /**
   *  Handle request to the server and store the data
   * @param {*} requestFunc function to call
   * @param  {...any} params data to pass to the function
   */
  async function handleRequest(requestFunc, ...params) {
    setIsLoading(true);
    try {
      const response = await requestFunc(...params);
      const taskRecord = response.data?.data;
      if (taskRecord) {
        handleStoringData(requestFunc, taskRecord, setTaskList, response, setAllDataFetched, setData);
      }
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  async function createNewTask(data) {
    await handleRequest(taskClient.createNewTask, data);
  };

  async function getTasks(category, status) {
    await handleRequest(taskClient.getTasks, category, status, page, ITEMS_PER_PAGE);
  };

  async function loadMoreData(category, status) {
    await handleRequest(taskClient.getTasks, status, page, ITEMS_PER_PAGE);
    setPage(prevPage => prevPage + 1);
  };

  async function markTaskAsCompleted(id, status) {
    await handleRequest(taskClient.markTaskAsCompleted, id, status);
  };

  async function deleteTask(id) {
    await handleRequest(taskClient.deleteTask, id);
  };

  async function getTask(id) {
    await handleRequest(taskClient.getTask, id);
  };

  return {
    data,
    isLoading,
    allDataFetched,
    getTask,
    getTasks,
    deleteTask,
    createNewTask,
    loadMoreData,
    markTaskAsCompleted,
  };
}

export default useTaskPagination;

// helper function to handle storing data
function handleStoringData(requestFunc, taskRecord, setTaskList, response, setAllDataFetched, setData) {
  console.log('Func: ', requestFunc.name)
  console.log('Create New Task: ', taskRecord);
  switch (requestFunc.name) {
    case 'createNewTask':
      setTaskList(prevData => [...prevData, taskRecord]);
      break;
    case 'markTaskAsCompleted':
      setTaskList(prevData => {
        const indexToUpdate = prevData.findIndex(item => item._id === taskRecord._id);
        console.log('indexToUpdate', indexToUpdate);
        if (indexToUpdate !== -1) {
          const updatedData = [...prevData];
          updatedData[indexToUpdate] = taskRecord;
          console.log('indexToUpdate', indexToUpdate);
          return updatedData;
        }
        return [...prevData, taskRecord];
      });
      break;
    case 'deleteTask':
      setTaskList(prevData => {
        // Create a copy of the array
        const updatedData = [...prevData];
        // Find the index of the item with the given id
        const indexToDelete = updatedData.findIndex(item => item._id === response.data.data._id);
        // If the item is found, remove it from the array copy
        if (indexToDelete !== -1) {
          updatedData.splice(indexToDelete, 1);
        }
        // Return the updated array
        return updatedData;
      });
      break;
    default:
      if (taskRecord.length < ITEMS_PER_PAGE) {
        setAllDataFetched(true);
      }
      setTaskList(prevData => [...prevData, ...taskRecord]);
      setData(response.data);
      break;
  }
}

