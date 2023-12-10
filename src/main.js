import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3TouchEvents from "vue3-touch-events";
// import store from './Vuex';

import App from './App.vue'
import router from './router'
import $ from 'jquery';
window.$ = window.jQuery = $;


const app = createApp(App)

app.use(createPinia())

app.use(router)
// app.use(store)
app.use(Vue3TouchEvents);
app.use($)
app.mount('#app')
