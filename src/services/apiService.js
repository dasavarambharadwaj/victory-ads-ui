const axios = require("axios").default;
export default {
  name: "apiService",
  async get(url, params) {
    try {
      const response = await axios.get(process.env.VUE_APP_BACKEND_URL + url, {
        params: params,
      });
      return response;
    } catch (error) {
      return null;
    }
  },
  async post(url, data) {
    try {
      const response = await axios.post(process.env.VUE_APP_BACKEND_URL + url, data)
      return response
    } catch (error) {
      return null
    }
  }
};
