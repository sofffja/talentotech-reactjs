import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await apiClient.post("/products", product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await apiClient.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  console.log(id);
  const response = await apiClient.delete(`/products/${id}`);
  return response.data;
};

export default apiClient;
