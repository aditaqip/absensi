import { defineStore } from "pinia";
import "./axios";
import axios from "axios";
import router from "./router";

export const useAuthStores = defineStore('auth', {
    id: 'auth',
    state: () => ({
        userInfo: null,
        isLogin: false,
        isLoginLoading: false,
        isLoginError: false,
        returnUrl: null,
        token: null,
      }),
    actions: {
        async login(email, password) {
            const user = await axios.post('login', {
                email: email,
                password: password
            }).then((e) => {
                this.isLoginLoading = true
                return e
            }).then((e) => {
                if (e.status == 200) {
                    this.isLogin = true
                    // this.userInfo = e.data.
                    let token = e.data.Token
                    let userEmail = e.data.Email
                    const userInfo = {
                        token: token,
                        userEmail : userEmail
                    }
                    this.userInfo = userInfo
                }else{
                    return
                }
            }).catch((res, error) => {
                console.log(error)
            })
            if (this.isLogin) {
                localStorage.setItem('user', JSON.stringify(this.userInfo));
                router.push(this.returnUrl || '/dashboard');
            }
        },
        logout() {
            this.userInfo = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        getUserInfo() {
            try{
                if (localStorage.getItem('user') == null) {
                   this.isLogin = false
                   router.push('/login');
                   return
                }
                let data = JSON.parse(localStorage.getItem('user'))
                const user = axios.get('user', {
                    email: data.userEmail,
                    token: data.token
                }).then((e) => {
                    console.log(e)
                    if (e.status == 200) {
                        this.isLogin = true
                        router.push('/dashboard');
                    }else{
                        this.isLogin = false
                        router.push('/login');
                        return
                    }
                }).catch((error) => {
                    
                })
            }catch{
                router.push('/login');
            }
        },
        getUserInfos() {
            if (typeof localStorage.getItem('user') == 'undefined') {
               this.isLogin = false
               router.push('/login');
               return
            }
            return JSON.parse(localStorage.getItem('user')).userEmail
        }
    }
    

})