<template>
    <div class="w-full">
        <div class="p-3 md:p-7">
            <div class="bg-white rounded-[20px] p-5 overflow-x-auto">
                <div class="w-full flex justify-between flex-wrap">
                    <h1>Grafik Absensi</h1>
                    <div class="flex gap-5">
                        <a class="px-3 rounded-xl py-1" :class="stateViewChart && 'border border-black'" href="#" v-on:click="stateViewChart = true">Mingguan</a>
                        <a class="px-3 rounded-xl py-1" :class="!stateViewChart && 'border border-black'" href="#" v-on:click="stateViewChart = false">Bulanan</a>
                    </div>
                </div>
                <div :class="!stateViewChart && 'hidden'">
                    <BulananViewChart />
                </div>
                <div :class="stateViewChart && 'hidden'">
                    <MinugganViewChart />
                </div>
                <div :class="stateViewChart ? 'opacity-0' : 'opacity-100'">
                    <div style="positon:relative; height:600px; width:100%" class="mx-auto max-w-screen-lg w-full z-10 relative">
                        <l-map ref="map" v-model:zoom="zoom" :center="[-1.200000, 113.816666]" :use-global-leaflet="false">
                            <l-tile-layer
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              layer-type="base"
                              name="OpenStreetMap"
                            ></l-tile-layer>
                        </l-map>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import BulananViewChart from './partials/BulananViewChart.vue'
import MinugganViewChart from './partials/MinugganViewChart.vue'
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";




const stateViewChart = ref(true)

export default {
    name: 'HomeDashboard',
    components: { 
        BulananViewChart, 
        MinugganViewChart, 
        LMap,
        LTileLayer,
    },
    data() {
        return {
            stateViewChart,
            zoom:5
        }
    },
    methods: {

    }
}
</script>
<style lang="">
    
</style>