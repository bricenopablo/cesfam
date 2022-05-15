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
    const { status } = error.response;
    if (status === 401) {
      sessionStorage.removeItem("accessToken");
    }
    return Promise.reject(error.response.data);
  }
);

export default {
  getMedicines() {
    return MedicinesService.get("/");
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
