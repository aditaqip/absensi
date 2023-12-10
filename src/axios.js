import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.common['access-token'] = "Bearer " + 123456;