const axios = require('axios');
module.exports = class ApiServices {
    async get(url,payload){
        try {
            let data = await axios.get(url,payload);
            return data;
        }
        catch(error) {
            console.log(error);
        }
    }
}