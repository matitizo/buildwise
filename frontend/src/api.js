import axios from "axios";

const API = axios.create({
  baseURL: "https://buildwise-mxvk.onrender.com/api",
});

export default API;