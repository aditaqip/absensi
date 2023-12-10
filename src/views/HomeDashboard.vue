<template>
    <div>
        <Main>
            <Dashboard />
            <HomeDashboard />
        </Main> 
    </div>
</template>


<script>
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue';
import Main from './../components/Admin/Main.vue';
import HomeDashboard from './../components/Admin/Home/HomeDashboard.vue';


export default {
    components: {
        Main,
        HomeDashboard,
        Dashboard
    },
    name: 'Peserta',
}
</script>
<style>
    
</style>