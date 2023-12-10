<template>
    <div>
        <Main>
            <ReportingComponents />
        </Main> 
    </div>
</template>

<script>
import Main from './../components/Admin/Main.vue';
import ReportingComponents from './../components/Admin/Reporting/Reporting.vue';
import {ref, defineAsyncComponent} from 'vue'

export default {
    components: {
        Main,
        ReportingComponents,
      
    },
    name: 'Kapal',
}
</script>
<style>
    
</style>