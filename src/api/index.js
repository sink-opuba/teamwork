import axios from "axios";
const { token } = JSON.parse(localStorage.getItem("data")) || { token: "" };
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1"
    : "https://sink-teamwork-api.herokuapp.com/api/v1";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

API.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default API;
