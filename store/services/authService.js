import axios from "axios";
import { AUTH } from "../apiConfig";

const register = (name, email, password) => {
  return axios.post(AUTH.REGISTER_API, { name, email, password });
};

const login = async (email, password) => {
  return await axios
    .post(AUTH.LOGIN_API, { email, password })
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  return axios.post(AUTH.LOGOUT_API).then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return axios.get(AUTH.GET_USER_API).then((response) => {
    return response.data;
  });
};

export const fetchUserDetails = async (token) => {
  const response = await axios.get(AUTH.GET_USER_API, {
    headers: {
      Authorization: `${token}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  fetchUserDetails,
};

export default AuthService;
