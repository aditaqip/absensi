<template lang="">
    <div class="flex justify-end relative">
        <SidebarMenu />
        <div class="w-full h-screen overflow-y-auto bg-slate-100">
            <navbar />
            <div class="h-full bg-slate-100 overflow-y-auto overflow-x-hidden">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarMenu from './../Admin/partials/SidebarMenu.vue';
import navbar from './Navbar.vue';

const i = 0

// console.log(this.datas)
export default {
    name: 'Main',
    components: {
        SidebarMenu,
        navbar
    },
    created(){
        if (typeof localStorage.getItem('token') == 'undefined') {
            this.$router.push('/login')
        }
        if (localStorage.getItem('token') != 123456) {
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="">
    
</style>