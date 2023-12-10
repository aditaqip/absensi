import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/"

axios.defaults.headers.common['access-token'] = "Bearer " + 123456;
try {
    if (localStorage.length != 0) {
        let token = JSON.parse(localStorage.getItem('user')).token;
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }
} catch (error) {

}