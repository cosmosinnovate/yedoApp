export const END_POINTS = Object.freeze({
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    CONFIRM: '/auth/confirm',
    OTP: '/auth/otp',
    OTP_VERIFY: '/auth/otp/verify',
    OTP_RESEND: '/auth/otp/resend',
    OTP_RESEND_VERIFY: '/auth/otp/resend/verify',
    OTP_RESEND_CONFIRM: '/auth/otp/resend/confirm',
    USERS: '/users', // users, users/{id} [delete, update, get, post]
    GROUPS: '/groups', // groups, groups/{id} [delete, update, get, post]
    GROUPS_JOIN: '/groups/join',
    GROUPS_JOIN_VERIFY: '/groups/join/verify',
    TASK: '/task',
    TASKS: '/tasks',
    BASE_URL: 'http://localhost:9000/api',
});