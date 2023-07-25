// import userClient from "../services/api/api.client.user";
// import { getUserId } from "../services/token";

// function userHook() {
//   const handleRequest = async (requestFunc, ...params) => {
//     setUserDataLoading(true);
//     try {
//       const response = await requestFunc(...params);
//       return response;
//     } catch (error) {
//       return error;
//     } finally {
//       setUserDataLoading(false);
//     }
//   };

//   const getUser = async (id) => {
//     return await handleRequest(userClient.getUser, id);
//   };

//   const updateUser = async (data) => {
//     const id = await getUserId();
//     return await handleRequest(userClient.updateUser, data, id);
//   };

//   const markUserForDeletion = async (id) => {
//     return await handleRequest(userClient.markUserForDeletion, id);
//   };

//   return {
//     getUser,
//     userData,
//     updateUser,
//     userDataLoading,
//     markUserForDeletion,
//   };
// }

// export default useUser;
