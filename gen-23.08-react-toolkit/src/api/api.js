import axios from "axios";

const BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle errors
const handleErrors = (error) => {
  console.error("API Error:", error);
  throw error;
};

// Generic CRUD functions
const sendRequest = async (method, endpoint, data = null) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    });

    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

const getAllItems = async (endpoint) => {
  return sendRequest("get", endpoint);
};

const getItemById = async (endpoint) => {
  return sendRequest("get", endpoint);
};

const createItem = async (endpoint, itemData) => {
  return sendRequest("post", endpoint, itemData);
};

const updateItem = async (endpoint, itemData) => {
  return sendRequest("put", endpoint, itemData);
};

const deleteItem = async (endpoint) => {
  return sendRequest("delete", endpoint);
};

export { createItem, deleteItem, getAllItems, getItemById, updateItem };
