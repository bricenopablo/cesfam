import axios from "axios";

const AuthService = axios.create({
  baseURL: process.env.VUE_APP_AUTHENTICATION_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//Interceptores
AuthService.interceptors.request.use(
  (config) => {
    // Verifica si existe un token
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AuthService.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error.response.data)
);

export default {
  login(credentials) {
    return AuthService.post("/login", credentials);
  },
  createAccount(data) {
    return AuthService.post("/register", data);
  },
  getUserData() {
    return AuthService.get("/info");
  },
};
