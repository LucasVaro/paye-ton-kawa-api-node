import axios from "axios";

const api = {
  get: async (url: string) => axios.get(url),
  post: async (url: string, data: any) =>
    axios
      .post(url, data)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(`Error posting ${url} ${err}`);
      }),
  put: async (url: string, data: any) =>
    axios
      .put(url, data)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(`Error putting ${url} ${err}`);
      }),
  del: async (url: string) =>
    axios
      .delete(url)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(`Error deleting ${url} ${err}`);
      }),
};

export default api;
