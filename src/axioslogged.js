import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/"

try {
    if (localStorage.length != 0) {
        let token = JSON.parse(localStorage.getItem('user')).token;
        axios.defaults.headers['Authorization'] = "Bearer " + token;
    }
} catch (error) {
}
