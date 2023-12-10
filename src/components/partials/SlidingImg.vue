<template>
    <div class="flex gap-4 flex-col">
        <LeftSliding />
        <rightSliding />
        <div></div>
    </div>
</template>

<script>
    import LeftSliding from './LeftSliding.vue';
    import rightSliding from './rightSliding.vue';

    export default {
        name: 'Sliding',
        components:{
            LeftSliding,
            rightSliding
        }
    }
</script>

<style scoped>

</style>