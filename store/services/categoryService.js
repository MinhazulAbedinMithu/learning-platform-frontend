import axios from "axios";
import { CATEGORIES } from "../apiConfig";

const getAllCategories = async () => {
  const response = await axios.get(CATEGORIES.GET_CATEGORIES);
  return response.data;
};

export const categoryServices = {
  getAllCategories,
};
