import { useContext, useState } from "react";
import taskClient from "../services/api/api.client.task";
import { AuthContext } from "../services/store/store.context";


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

function useTaskPagination(initialPage = 1) {
  const [data, setData] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [allDataFetched, setAllDataFetched] = useState(false);

  const handleRequest = async (requestFunc, ...params) => {
    setTaskLoading(true);
    try {
      const response = await requestFunc(...params);
      if (response.data?.data.length < ITEMS_PER_PAGE) {
        setAllDataFetched(true);
      }
      
      if (requestFunc.name === 'markTaskAsCompleted' || requestFunc.name === 'deleteTask') {
        if (response.data?.data) {
          setTimeout(() => {
            setTasks(prevData => prevData.filter(item => !(item.id === response.data.data.id && item.status)));
            // setData(response.data);
          }, 6000);
        }        
      } else {
        setTasks(prevData => [...prevData, ...response.data?.data]);
        setData(response.data);
      }
    } catch (error) {
      setData(error.response?.data);
    } finally {
      setTaskLoading(false);
    }
  };

  const getTasks = async (status, category) => {
    await handleRequest(taskClient.getTasks, category, status, page, ITEMS_PER_PAGE);
    setPage(prevPage => prevPage + 1);
  };

  const markTaskAsCompleted = async (id) => {
    console.log('Mark as complete', id);
    await handleRequest(taskClient.markTaskAsCompleted, id);
  };

  const deleteTask = async (id) => {
    await handleRequest(taskClient.deleteTask, id);
  };

  const getTask = async (id) => {
    await handleRequest(taskClient.getTask, id);
  };

  const createNewTask = async (data) => {
    await handleRequest(taskClient.createNewTask, data);
  };

  return {
    data,
    page,
    tasks,
    setPage,
    getTask,
    getTasks,
    deleteTask,
    taskLoading,
    createNewTask,
    allDataFetched,
    markTaskAsCompleted
  };
}

export default useTaskPagination;
