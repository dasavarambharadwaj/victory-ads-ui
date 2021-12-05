const axios = require("axios");
class ApiServices {
  async get(url, payload) {
    try {
      let data = await axios.get(url, {
        params: payload,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default ApiServices;
