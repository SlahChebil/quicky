import axios from "axios";

const API = axios.create({
  baseURL: "https://quicky-be.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
