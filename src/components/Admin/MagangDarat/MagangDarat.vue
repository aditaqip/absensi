<template>
    <div>
        <HeadNav title="Magang Darat" />
        <div class="grid grid-cols-3 md:gap-5 gap-3 p-7">
            <div class="bg-white rounded-xl pl-5 pr-16 pt-5 pb-6 flex flex-col justify-between h-32 md:h-40 col-span-3 md:col-span-1">
                <div class="text-center text-2xl">Teknologi Informasi</div>
                <div class="w-80 mx-auto border-b-2 mb-2"></div>
                <div class="text-center text-5xl ml-10">250</div>
            </div>
        </div>
    </div>
</template>
<script>
import HeadNav from '../partials/HeadNav.vue';



export default {
    components:{
        HeadNav
    },
    name: 'MagangDarat'
}
</script>
<style>
    
</style>