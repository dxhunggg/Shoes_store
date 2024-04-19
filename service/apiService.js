import axios from "../utils/axios";
const getAllProduct = () => {
  return axios.get("api/Products");
};

const getProductByID = (id) => {
  return axios.get(`api/Products/${id}`);
};
export { getAllProduct, getProductByID };
