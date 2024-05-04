import axios from 'axios';

const checkLogin = (email, password) => {
    const loginData = {
        email: email,
        password: password
    };

    return axios.post('http://localhost:5173/login', loginData)
        .then(response => {
            console.log(response.data); // Di sini Anda dapat menangani respons dari server
            return response.data; // Mengembalikan data respons untuk digunakan di luar fungsi
        })
        .catch(error => {
            console.error(error); // Tangani kesalahan jika permintaan gagal
            throw new Error("Login failed"); // Melemparkan error untuk ditangani oleh pemanggil
        });
};

export default checkLogin;
