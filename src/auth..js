import { defineStore } from "pinia";
import axios from "axios";
import router from "./router";
import { addEquivalentTransforms } from "ol/proj";

export const useAuthStores = defineStore('auth', {
    id: 'auth',
    state: () => ({
        userInfo: null,
        isLogin: false,
        isLoginLoading: false,
        returnUrl: null,
        token: null,
    }),

    actions: {
        async login(email, password) {
            try {
                this.error = null;

                const email_exp = "adit@gmailss.com";
                const password_exp = "123456";
                // this.isLoginLoading = true;
                // const response = await axios.post('http://localhost:5173/login', {
                //     email: email,
                //     password: password
                // });

                // if (response.status === 200) {
                //     this.isLogin = true;
                //     const token = response.data.token;
                //     const userEmail = response.data.email;
                //     this.userInfo = {
                //         token: token,
                //         userEmail: userEmail
                //     };
                //     localStorage.setItem('user', JSON.stringify(this.userInfo));
                //     router.push(this.returnUrl || '/dashboard');
                // }

                if (email == email_exp & password == password_exp ){
                    this.isLogin = true;
                    // const token = response.data.token;
                    // const userEmail = response.data.email;
                    // this.userInfo = {
                    //     token: token,
                    //     userEmail: userEmail
                    // };
                    localStorage.setItem('user', "123123");
                    router.push(this.returnUrl || '/dashboard');
                } else {
                    console.log("error login")
                    alert("Email or password is incorrect")
                }

            } catch (error) {
                console.error(error);
                this.isLoginLoading = false;
                // Handle error here
            }
        },
        logout() {
            this.userInfo = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async getUserInfo() {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user) {
                    this.isLogin = false;
                    router.push('/login');
                    return;
                }
                const response = await axios.get('http://localhost:5173/user', {
                    params: {
                        email: user.userEmail
                    }
                });
                if (response.status === 200) {
                    this.isLogin = true;
                    router.push('/dashboard');
                }
            } catch (error) {
                console.error(error);
                this.isLogin = false;
                router.push('/login');
            }
        },
        getUserInfos() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                this.isLogin = false;
                router.push('/login');
                return;
            }
            return user.userEmail;
        }
    }
});
