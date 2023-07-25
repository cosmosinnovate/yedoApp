// import { selector } from "recoil";
// import { filterTaskState, taskListState, taskSearchState } from "../atoms/tasks.atoms";

// export const categorizedTaskListState = selector({
//   key: 'categorizedTaskListState',
//   get: ({ get }) => {
//     const filter = get(filterTaskState);
//     const list = get(taskListState);
//     switch (filter.toLowerCase()) {
//       case 'done':
//         return list.filter((task) => task.status);
//       case 'active':
//         return list.filter((task) => !task.status);
//       case 'personal':
//         return list.filter((task) => task?.category.toLowerCase() === 'personal');
//       case 'work':
//         return list.filter((task) => task?.category.toLowerCase() === 'work');
//       case 'family':
//         console.log(filter, 'family');
//         return list.filter((task) => task.category.toLowerCase() === 'family');
//       default:
//         return list;
//     }
//   }
// });

// export const taskSearchListState = selector({
//   key: 'taskSearchListState',
//   get: ({ get }) => {
//     const search = get(taskSearchState);
//     const list = get(categorizedTaskListState);
//     return list.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));
//   }
// });