import axios from "axios";

axios.defaults.baseURL = "http://localhost:5173/"
axios.defaults.headers.common['access-token'] = "Bearer " + 123456;