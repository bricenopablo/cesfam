import store from "@/store";
import axios from "axios";

const PatientsService = axios.create({
  baseURL: process.env.VUE_APP_PATIENTS_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//Interceptores
PatientsService.interceptors.request.use(
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

PatientsService.interceptors.response.use(
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
  getPatients(filters) {
    let query = filters ? "?" : "";
    for (const filter in filters) {
      if (filters[filter] !== "") {
        query += `${filter}=${filters[filter]}&`;
      }
    }
    return PatientsService.get("/" + query);
  },
  getPatientById(id) {
    return PatientsService.get(`/${id}`);
  },
  create(data) {
    return PatientsService.post("/", data);
  },
  delete(id) {
    return PatientsService.delete(`/${id}`);
  },
  update(id, data) {
    return PatientsService.patch(`/${id}`, data);
  },
};
