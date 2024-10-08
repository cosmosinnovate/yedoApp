export const END_POINTS = Object.freeze({
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    USERS: '/users', // users, users/{id} [delete, update, get, post]
    USER_INFO: '/users/info', // users, users/{id} [delete, update, get, post]
    GROUPS: '/groups', // groups, groups/{id} [delete, update, get, post]
    GROUPS_JOIN: '/groups/join',
    GROUP_SEND_INVITE: '/group/invite',
    GROUP_CONFIRM_INVITE: '/group/invite/confirm',
    TASKS: '/tasks', // {id} [delete, update, get, post]
    TASK_COMPLETE: '/tasks/completed',
    // BASE_URL: 'http://localhost:8080/api',
    BASE_URL: 'https://dolphin-app-8xfkh.ondigitalocean.app/api',
});