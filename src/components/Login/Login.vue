<template>
    <div class="flex items-center justify-center h-screen">
        <form @submit.prevent="loginStore.login(email, password)" class="w-full flex justify-center">
            <div class="p-4 md:p-9 w-5/6 border h-4/6 md:h-fit md:w-3/5 flex flex-col justify-center items-center relative rounded-xl gap-16">
                <div class="w-7 h-7 md:w-14 md:h-14 rounded-full border absolute top-[-15px] md:top-[-30px] bg-white"></div>
                <div class="w-16 md:w-20  mt-6">
                    <img src="./../../assets/images/pt.png" class="w-full" alt="">
                </div>
                <div class="flex justify-center flex-col">
                    <div>
                        <div class="flex flex-col justify-center items-center gap-3">
                            <div>
                                <div>
                                    <label for="email-id">Email</label>
                                </div>
                                <div>
                                    <input class="border-b rounded border-black px-3 focus:outline-none py-1" type="email" id="email-id'" :disabled="false" v-model="email">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="password-id">Password</label>
                                </div>
                                <div>
                                    <input class="border-b rounded border-black px-3 focus:outline-none py-1" type="password" id="password-id'" :disabled="false" v-model="password">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/4 flex justify-center">
                    <button class="pt-[8px] pb-[9px] md:w-2/4 w-full rounded-md outline outline-1 outline-black bg-[#1D388D] text-white change-login" @click="console.log(loginStore.isLoginLoading)" v-if="loginStore.isLoginLoading"><loading /></button>
                    <button class="pt-[8px] pb-[9px] md:w-2/4 w-full rounded-md outline outline-1 outline-black bg-[#1D388D] text-white change-login" v-if="!loginStore.isLoginLoading">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Input from './../Forms/partials/login/input.vue';
    import checkLogin from '../../stores/login.js';
    import {useAuthStores} from '../../auth.'
    import loading from '../../assets/images/loading.vue';

    export default {
        name: 'Login',
        setup: () => {
            return {
                errorLogs,
                LoginMessage
            }
        },
        data(){
            return {
                email : '',
                password : ''
            }
        },
        components: {
    Input,
    loading
},
        setup() {
            const loginStore = useAuthStores()
            return {
                loginStore,
            }
        },
        data() {
            const loginStore = useAuthStores()
            return {
                loginStore
            }
        },
        methods: {
                
                // return new Promise(function (resolve, reject) {     
                //     if (login.email == email && login.password == password) {
                //         const data = {
                //             message : 'success',
                //             data: {
                //                 email: email,
                //                 token: 123456
                //             }
                //         }
                //       resolve(data);
                //     } else {
                //       reject(Error("wrong credentials"));
                //     }
                // });
        }
    }
</script>