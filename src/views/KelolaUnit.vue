<template>
    <div>
        <Main>
            <UnitKerjaComponents />
            <KapalComponents />
        </Main> 
    </div>
</template>

<script>
import KapalComponents from '../components/Admin/Kapal/KapalComponents.vue';
import UnitKerjaComponents from '../components/Admin/UnitKerja/UnitKerjaComponents.vue';
import Main from './../components/Admin/Main.vue';

export default {
    components: {
        Main,
        UnitKerjaComponents,
        KapalComponents
    },
    props:{
        title:String
    },
    created(){
        if (this.title) {
            
        }
    },
    name: 'KelolaUnit',

}
</script>
<style>
    
</style>