import axios from "axios";

const Api = axios.create({
    baseURL:'http://dummy.restapiexample.com/api/v1/employees'
});

export default Api;