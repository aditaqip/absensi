<template>
    <div>
        <Main>
            <Dashboard />
            <MagangDarat />
        </Main> 
    </div>
</template>

<script>
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue';
import MagangDarat from '../components/Admin/MagangDarat/MagangDarat.vue';
import Main from './../components/Admin/Main.vue';


export default {
    components: {
    Main,
    Dashboard,
    MagangDarat
},
    name: 'TotalMagangDarat',
}
</script>
<style>
    
</style>