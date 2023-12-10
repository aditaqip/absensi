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

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// console.log(this.datas)
export default {
    name: 'Main',
    components: {
        SidebarMenu,
        navbar
    },
}
</script>
<style lang="">
    
</style>