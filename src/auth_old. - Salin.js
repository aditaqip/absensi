import { defineStore } from "pinia";
import axios from "axios";
import router from "./router";

export const useAuthStores = defineStore('auth', {
    id: 'auth',
    state: () => ({
        userInfo: null,
        isLogin: false,
        isLoginLoading: false,
        returnUrl: null,
    }),
    actions: {
        async login(email, password) {
            try {
                this.isLoginLoading = true;
                console.log("Start login process...");
        
                const response = await axios.post('login', { email, password });
                console.log("Response from login endpoint:", response);
        
                if (response.status === 200) {
                    console.log("Login successful. Proceeding with further steps...");
        
                    let token = response.data.Token;
                    let userEmail = response.data.Email;
                    console.log("Token:", token, "User Email:", userEmail);
        
                    const userInfo = { token, userEmail };
                    this.userInfo = userInfo;
        
                    localStorage.setItem('user', JSON.stringify(this.userInfo));
                    router.push(this.returnUrl || '/dashboard');
                } else {
                    // Proses login gagal, periksa status respons untuk informasi lebih lanjut
                    console.error("Login failed. Unexpected status:", response.status);
                }
            } catch (error) {
                console.error("Error during login:", error);
            } finally {
                this.isLoginLoading = false;
            }
        },
        
        

        logout() {
            this.userInfo = null;
            localStorage.removeItem('user');
            this.isLogin = false;
            router.push('/login');
        },

        async getUserInfo() {
            try {
                const storedUser = localStorage.getItem('user');

                if (!storedUser) {
                    this.isLogin = false;
                    router.push('/login');
                    return;
                }

                const data = JSON.parse(storedUser);
                const response = await axios.get(`user?email=${data.userEmail}`);

                if (response.status === 200) {
                    this.isLogin = true;
                    router.push('/dashboard');
                } else {
                    this.isLogin = false;
                    router.push('/login');
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
                this.isLogin = false;
                router.push('/login');
            }
        },

        getUserInfos() {
            try {
                const user = JSON.parse(localStorage.getItem('user'));

                if (user && user.userEmail) {
                    return user.userEmail;
                } else {
                    this.isLogin = false;
                    router.push('/login');
                    return null;
                }
            } catch (error) {
                console.error("Error fetching user infos:", error);
                this.isLogin = false;
                router.push('/login');
                return null;
            }
        }
    }
});
