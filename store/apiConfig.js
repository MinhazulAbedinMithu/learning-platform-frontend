// export const BASE_URL = "http://localhost:8080";
// export const BASE_URL = "https://learning-platform-indol.vercel.app";
export const BASE_URL = "https://lms-backend-alpha.vercel.app/api";

export const AUTH = {
  REGISTER_API: `${BASE_URL}/auth/register`,
  LOGIN_API: `${BASE_URL}/auth/login`,
  GET_USER_API: `${BASE_URL}/me`,
  LOGOUT_API: `${BASE_URL}/auth/logout`,
};
