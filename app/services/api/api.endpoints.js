export const END_POINTS = Object.freeze({
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    OTP_VERIFY: '/auth/otp/verify',
    OTP_RESEND: '/auth/otp/resend',
    USERS: '/users', // users, users/{id} [delete, update, get, post]
    USER_INFO: '/users/info', // users, users/{id} [delete, update, get, post]
    GROUPS: '/groups', // groups, groups/{id} [delete, update, get, post]
    GROUPS_JOIN: '/groups/join',
    GROUP_SEND_INVITE: '/group/invite',
    GROUP_CONFIRM_INVITE: '/group/invite/confirm',
    TASKS: '/tasks', // {id} [delete, update, get, post]
    TASK_COMPLETE: '/tasks/complete',
    // BASE_URL: 'https://walrus-app-4kspt.ondigitalocean.app/api',
    BASE_URL: 'http://localhost:8080/api',
});         