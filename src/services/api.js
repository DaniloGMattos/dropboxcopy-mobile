import axios from "axios";

const api = axios.create({
  baseURL: "https://dropboxcopy-backend.herokuapp.com"
});

export default api;
