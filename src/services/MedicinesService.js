import store from "@/store";
import axios from "axios";

const MedicinesService = axios.create({
  baseURL: process.env.VUE_APP_MEDICINES_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//Interceptores
MedicinesService.interceptors.request.use(
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

MedicinesService.interceptors.response.use(
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
  getMedicines(filters) {
    let query = filters ? "?" : "";
    for (const filter in filters) {
      if (filters[filter] !== "") {
        query += `${filter}=${filters[filter]}&`;
      }
    }
    return MedicinesService.get("/" + query);
  },
  getMedicineByCode(code) {
    return MedicinesService.get(`/${code}`);
  },
  create(data) {
    return MedicinesService.post("/", data);
  },
  delete(code) {
    return MedicinesService.delete(`/${code}`);
  },
  update(code, data) {
    return MedicinesService.patch(`/${code}`, data);
  },
};
