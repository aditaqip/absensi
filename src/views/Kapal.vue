<template>
    <div>
        <Main>
            <KapalComponents />
        </Main> 
    </div>
</template>

<script>
import Main from './../components/Admin/Main.vue';
import KapalComponents from './../components/Admin/Kapal/KapalComponents.vue';
import {ref, defineAsyncComponent} from 'vue'

export default {
    components: {
        Main,
        KapalComponents,
      
    },
    name: 'Kapal',
}
</script>
<style>
    
</style>