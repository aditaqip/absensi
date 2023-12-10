<template>
    <div>
        <Main>
            <Dashboard />
            <KelolaMagangDaratComponents />
        </Main> 
    </div>
</template>

<script>
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue';
import KelolaMagangDaratComponents from '../components/Admin/MagangDarat/KelolaMagangDarat.vue';
import Main from './../components/Admin/Main.vue';


export default {
    components: {
        Main,
        Dashboard,
        KelolaMagangDaratComponents
    },
    name: 'KelolaMagangDarat',
}
</script>
<style>
    
</style>