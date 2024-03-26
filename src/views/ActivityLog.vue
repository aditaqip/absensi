<template>
    <div>
        <Main>
            <ActivityLog />
        </Main> 
    </div>
</template>

<script>
import Main from './../components/Admin/Main.vue';
import ActivityLog from './../components/Admin/ActivityLog/ActivityLog.vue';
import {ref, defineAsyncComponent} from 'vue'

export default {
    components: {
        Main,
        ActivityLog,
      
    },
    name: 'activity-log',
}
</script>
<style>
    
</style>