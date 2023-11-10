import axios from "axios";
import Cookies from "js-cookie";

const connection = axios.create({
  baseURL: "https://second-challenge-backend.onrender.com",
  headers: {
    Authorization: Cookies.get("token"),
  },
});

// interceptação de todas requests de axios
// mantendo a configuração original e somente uma instância
connection.interceptors.request.use(
  (config) => {
    config.headers.Authorization = Cookies.get("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { connection };

