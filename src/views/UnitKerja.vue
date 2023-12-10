<template>
    <div>
        <Main>
            <UnitKerjaComponents />
        </Main> 
    </div>
</template>

<script>
import Main from './../components/Admin/Main.vue';
import UnitKerjaComponents from './../components/Admin/UnitKerja/UnitKerjaComponents.vue';
import {ref, defineAsyncComponent} from 'vue'

export default {
    components: {
        Main,
        UnitKerjaComponents,
      
    },
    name: 'UnitKerja',
}
</script>
<style>
    
</style>