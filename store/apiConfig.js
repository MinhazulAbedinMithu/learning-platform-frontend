// export const BASE_URL = "http://localhost:8080/api";
export const BASE_URL = "https://online-learning-platform-backend.vercel.app/api";

export const AUTH = {
  REGISTER_API: `${BASE_URL}/auth/register`,
  LOGIN_API: `${BASE_URL}/auth/login`,
  GET_USER_API: `${BASE_URL}/auth/profile`,
  LOGOUT_API: `${BASE_URL}/auth/logout`,
};

export const CATEGORIES = {
  GET_CATEGORIES: `${BASE_URL}/categories`,
};

export const COURSES = {
  GET_ALL_COURSES: `${BASE_URL}/courses`,
};

export const SINGLE_COURSES = {
  GET_SINGLE_COURSES: (courseId) => `${BASE_URL}/courses/${courseId}`,
};
