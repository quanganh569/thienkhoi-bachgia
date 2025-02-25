import axios from "axios";

const apiStrapi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BUILD_URL}/api`,
});



apiStrapi.interceptors.response.use(
  (response: { data: any }) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default apiStrapi;
