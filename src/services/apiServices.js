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

  async post(url, payload) {
    try {
      await axios.post(
        url,
        { body: JSON.stringify(payload) },
        {
          headers: { "content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.Error(error);
    }
  }
}
export default ApiServices;
