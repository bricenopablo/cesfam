import store from "@/store";
import axios from "axios";

const PrescriptionsService = axios.create({
  baseURL: process.env.VUE_APP_PRESCRIPTIONS_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//Interceptores
PrescriptionsService.interceptors.request.use(
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

PrescriptionsService.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const { status } = error.response.data;
    if (status === 401) {
      store.dispatch("logout");
    }
    return Promise.reject(error.response.data);
  }
);

export default {
  getPrescriptions() {
    return PrescriptionsService.get("/");
  },
  getPrescriptionById(id) {
    return PrescriptionsService.get(`/${id}`);
  },
  create(data) {
    return PrescriptionsService.post("/", data);
  },
  delete(id) {
    return PrescriptionsService.delete(`/${id}`);
  },
  update(id, data) {
    return PrescriptionsService.patch(`/${id}`, data);
  },
};
