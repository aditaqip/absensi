<template>
    <div>
        <Main>
            <Dashboard />
            <PesertaComponents />
        </Main> 
    </div>
</template>

<script>
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue';
import Main from './../components/Admin/Main.vue';
import PesertaComponents from './../components/Admin/Peserta/PesertaComponents.vue';


export default {
    components: {
        Main,
        PesertaComponents,
        Dashboard
    },
    name: 'Peserta',
}
</script>
<style>
    
</style>