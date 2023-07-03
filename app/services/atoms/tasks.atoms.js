import { atom } from 'recoil';

export const taskListState = atom({
    key: 'TaskList',
    default: []
});

export const filterTaskState = atom({
    key: 'FilterTaskState',
    default: 'active',
});

export const taskSearchState = atom({
    key: 'TaskSearchState',
    default: '',
});

export const taskState = atom({
    key: 'Task',
    default: {},
});

export const taskCreatedState = atom({
    key: 'TaskCreated',
    default: false,
});

export const taskLoadingState = atom({
    key: 'TaskLoading',
    default: false,
});

export const taskErrorState = atom({
    key: 'TaskError',
    default: null,
});

export const taskCompletedPaginationState = atom({  
    key: 'TaskCompletedPagination',
    default: {
        data: [],
        page: 1,
        limit: 10,
        allDataFetched: false,
        loading: false,
    },
});