<template>
    <div>
        <Main>
            <Dashboard />
            <KelolaMagangLautComponents />
        </Main> 
    </div>
</template>

<script>
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue';
import KelolaMagangLautComponents from '../components/Admin/MagangLaut/KelolaMagangLaut.vue';
import Main from './../components/Admin/Main.vue';


export default {
    components: {
        Main,
        Dashboard,
        KelolaMagangLautComponents
    },
    name: 'KelolaMagangLaut',
}
</script>
<style>
    
</style>