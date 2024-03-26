<template>
    <div>
        <Main>
            <UserAccesManagement />
        </Main> 
    </div>
</template>

<script>
import Main from './../components/Admin/Main.vue';
import UserAccesManagement from './../components/Admin/ActivityLog/UserAccesManagement.vue';
import {ref, defineAsyncComponent} from 'vue'

export default {
    components: {
        Main,
        UserAccesManagement,
      
    },
    name: 'user-acces-management',
}
</script>
<style>
    
</style>