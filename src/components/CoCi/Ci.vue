<template>
    <main class="overflow-hidden h-screen overflow-y-auto background-iamge-custom-cico">
        <div class="relative flex flex-wrap justify-center items-center">
            <svg class="w-full h-full mt-[-40px] md:mt-[-20px] xl:mt-[-230px]" viewBox="0 0 360 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="179.5" cy="23" rx="197.5" ry="62" fill="#D9D9D9"/>
            </svg>
            <span class="absolute top-[50%] z-10 font-bold leading-5 font-color">Check In</span>
        </div>
        <div class="w-full text-white mt-6 text-center">
            <div>
                <span>{{getDay(date.getDay()) + ', ' + date.getDate() +  ' ' + GetMonth(date.getMonth()) + ' ' + date.getFullYear()}}</span>
            </div>
        </div>
        <div class="flex justify-center flex-col items-center">
            <Time />
            <form v-on:submit.prevent="submitHandling" method="post"></form>
            <div class="w-4/5 md:w-2/4 grid grid-flow-row gap-5 mb-44 mt-10">
                <inputText v-model="npm" label="Nomor Peserta Magang" :disabled="false"/>
                <inputText v-model="nama" label="Nama Peserta Magang" :disabled="false"/>
                <selectCheck v-model="magangType" label="Jenis Program Magang" :disabled="false" :data="[{label : 'test',value:'test'}]"/>
                <selectCheck v-model="absensiType" label="Jenis Absensi" :disabled="false" :data="[{label : 'test',value:'test'}]"/>
                <selectCheck v-model="unitKerja" label="Unit Kerja Magang" :disabled="false" :data="[{label : 'test',value:'test'}]"/>
                <div style="positon:relative; height:600px; width:100%" :val="latitude">
                    <l-map ref="map" v-model:zoom="zoom" v-model:center="getLocation" :use-global-leaflet="false">
                        <l-tile-layer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          layer-type="base"
                          name="OpenStreetMap"
                        ></l-tile-layer>
                    </l-map>
                </div>
                <div class="flex justify-center">
                    <button class="px-5 py-3 outline outline-white rounded-3xl text-white bg-transparent mt-8">Submit</button>
                </div>
            </div>
            <!-- <Forms /> -->
        </div>
    </main>
</template>

<script>
import { ref } from 'vue';
import Time from './partials/Time.vue'
import inputText from './partials/inputText.vue';
import selectCheck from './partials/selectCheck.vue';
import { LMap, LTileLayer, LIcon, LLayerGroup, LMarker } from "@vue-leaflet/vue-leaflet";
let latitude = null;
let longitude = null;

let center;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}

export default {
    data() {
        return {
            date: new Date(),
            day:null,
            month:null,
            npm: null,
            nama: null,
            magangType: null,
            absensiType: null,
            unitKerja:null,
            time: '',
            zoom:10,
            latitude,
            longitude,
            center
        };
    },
    methods: {
        getDay(i) {
            var day = 'Senin'
            if (i == 0) {
                day = 'Minggu'
            }
            if (i == 1) {
                day = 'Senin'
            }
            if (i == 2) {
                day = 'Selasa'
            }
            if (i == 3) {
                day == 'Rabu'
            }
            if (i == 4) {
                day == 'Kamis'
            }
            if (i == 5) {
                day == 'Jumat'
            }
            if (i == 6) {
                day == 'Sabtu'
            }
            return day
        },
        async getLocation(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
            return [
                latitude, longitude
            ]
        },
        GetMonth(i) {
            var month
            month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            return month[i]
        },
        submitHandling() {
            console.log('submitted')
        }
    },
    name: 'ci',
    components: {
        Time,
        inputText,
        selectCheck,
        LMap,
        LTileLayer,
    }
}

</script>

<style scoped>
    .background-iamge-custom-cico {
        background: url('./../../assets/images/image-18.png'), rgba(38, 62, 103, 1);
        background-repeat: repeat;
        background-size: 100%;
    }
    .font-color{
        color: rgba(38, 62, 103, 1);
    }
</style>