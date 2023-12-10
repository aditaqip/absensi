<template>
    <div>
        <Main>
            <Dashboard />
            <MagangLaut />
        </Main> 
    </div>
</template>

<script>
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue';
import MagangLaut from '../components/Admin/MagangLaut/MagangLaut.vue';
import Main from './../components/Admin/Main.vue';


export default {
    components: {
    Main,
    Dashboard,
    MagangLaut
},
    name: 'TotalMagangLaut',
}
</script>
<style>
    
</style>