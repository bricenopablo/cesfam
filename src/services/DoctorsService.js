import axios from "axios";

const DoctorsService = axios.create({
  baseURL: process.env.VUE_APP_DOCTORS_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//Interceptores
DoctorsService.interceptors.request.use(
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

DoctorsService.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error.response.data)
);

export default {
  getDoctors() {
    return DoctorsService.get("/");
  },
  getDoctorById(id) {
    return DoctorsService.get(`/${id}`);
  },
  create(data) {
    return DoctorsService.post("/", data);
  },
  delete(id) {
    return DoctorsService.delete(`/${id}`);
  },
  update(id, data) {
    return DoctorsService.patch(`/${id}`, data);
  },
};
