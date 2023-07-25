// import { useEffect, useState } from "react";
// import taskClient from "../services/api/api.client.task";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// // import { taskListState } from "../services/atoms/tasks.atoms";
// import { tokenState, useGetJWToken } from "../services/token";

// /***
//  * TODO: 
//  * Add complete task functionality
//  * Add delete task functionality
//  * Add pagination
//  * Add search
//  * Add sort
//  * 
//  */

// const ITEMS_PER_PAGE = 10;

// const useTaskPagination = (initialPage = 1) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(initialPage);
//   const [allDataFetched, setAllDataFetched] = useState(false);
//   const setTaskList = useSetRecoilState(taskListState)
//   const jwt = useRecoilValue(tokenState)

//   /**
//    *  Handle request to the server and store the data
//    * @param {*} requestFunc function to call
//    * @param  {...any} params data to pass to the function
//    */
//   async function handleRequest(requestFunc, ...params) {
//     setIsLoading(true);
//     try {
//       const response = await requestFunc(...params);
//       const taskRecord = response.data?.data;
//       if (taskRecord) {
//         handleStoringData(requestFunc, taskRecord, setTaskList, response, setAllDataFetched, setData);
//       }
//     } catch (error) {
//       setData(error.response?.data);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   async function createNewTask(data) {
//     await handleRequest(taskClient.createNewTask, data, jwt);
//   };

//   async function getTasks(category, status) {
//     await handleRequest(taskClient.getTasks, category, status, page, ITEMS_PER_PAGE, jwt);
//   };

//   async function loadMoreData(category, status) {
//     await handleRequest(taskClient.getTasks, status, page, ITEMS_PER_PAGE, jwt);
//     setPage(prevPage => prevPage + 1);
//   };

//   async function markTaskAsCompleted(id, status) {
//     await handleRequest(taskClient.markTaskAsCompleted, id, status, jwt);
//   };

//   async function deleteTask(id) {
//     await handleRequest(taskClient.deleteTask, id, jwt);
//   };

//   async function getTask(id) {
//     await handleRequest(taskClient.getTask, id, token);
//   };

//   return {
//     data,
//     isLoading,
//     allDataFetched,
//     getTask,
//     getTasks,
//     deleteTask,
//     createNewTask,
//     loadMoreData,
//     markTaskAsCompleted,
//   };
// }

// export default useTaskPagination;

// // helper function to handle storing data
// function handleStoringData(requestFunc, taskRecord, setTaskList, response, setAllDataFetched, setData) {
//   console.log('Func: ', requestFunc.name)
//   console.log('Create New Task: ', taskRecord);
//   switch (requestFunc.name) {
//     case 'createNewTask':
//       setTaskList(prevData => [taskRecord, ...prevData]);
//       setData(response.data);
//       break;
//     case 'markTaskAsCompleted':
//       setTaskList(prevData => {
//         const indexToUpdate = prevData.findIndex(item => item._id === taskRecord._id);
//         if (indexToUpdate !== -1) {
//           const updatedData = [...prevData];
//           updatedData[indexToUpdate] = taskRecord;
//           return updatedData;
//         }
//         setData(response.data);
//         return [...prevData, taskRecord];
//       });
//       break;
//     case 'deleteTask':
//       setTaskList(prevData => {
//         const updatedData = [...prevData];
//         const indexToDelete = updatedData.findIndex(item => item._id === response.data.data._id);
//         if (indexToDelete !== -1) {
//           updatedData.splice(indexToDelete, 1);
//         }
//         setData(response.data);
//         return updatedData;
//       });

//       break;
//     default:
//       if (taskRecord.length < ITEMS_PER_PAGE) {
//         setAllDataFetched(true);
//       }
//       setTaskList(prevData => [...prevData, ...taskRecord]);
//       setData(response.data);
//       break;
//   }
// }

