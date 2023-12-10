<template>
    <div>
        <Main module="Peserta">
            <div class="w-full overflow-x-auto">
                <div class="p-2 md:p-7">
                    <div class="p-3 my-3 shadow-md">Peserta</div>
                    <hr class="my-3 border-black">
                    <button class="bg-button-primary rounded-xl pl-[10px] pt-[6px] pr-[35px] pb-[5px] flex gap-2 my-4" v-on:click="createState = !createState;">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g id="octicon:plus-16">
                                <path id="Vector" d="M9.6875 2.5C9.93614 2.5 10.1746 2.59877 10.3504 2.77459C10.5262 2.9504 10.625 3.18886 10.625 3.4375V8.75H15.9375C16.1861 8.75 16.4246 8.84877 16.6004 9.02459C16.7762 9.2004 16.875 9.43886 16.875 9.6875C16.875 9.93614 16.7762 10.1746 16.6004 10.3504C16.4246 10.5262 16.1861 10.625 15.9375 10.625H10.625V15.9375C10.625 16.1861 10.5262 16.4246 10.3504 16.6004C10.1746 16.7762 9.93614 16.875 9.6875 16.875C9.43886 16.875 9.2004 16.7762 9.02459 16.6004C8.84877 16.4246 8.75 16.1861 8.75 15.9375V10.625H3.4375C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875C2.5 9.43886 2.59877 9.2004 2.77459 9.02459C2.9504 8.84877 3.18886 8.75 3.4375 8.75H8.75V3.4375C8.75 3.18886 8.84877 2.9504 9.02459 2.77459C9.2004 2.59877 9.43886 2.5 9.6875 2.5Z" fill="black"/>
                                </g>
                            </svg>
                        </span>
                        <span>Tambah Data Peserta</span>
                    </button>
                    <div class="overflow-x-auto">
                        <table>
                            <thead class="w-3/5">
                                <th class="bg-[#87DCDC]">No</th>
                                <th class="bg-[#87DCDC]"  v-for="head in label">{{head.name}}</th>
                                <!-- <th class="bg-[#87DCDC] w-20"></th> -->
                            </thead>
                            <tbody v-if="typeof DataPesertaIndex == 'undefined'">
                                <div class="w-full">No Data</div>
                            </tbody>
                            <tbody v-if="(typeof DataPesertaIndex != 'undefined')">
                                <tr v-for="(index, items) in DataPesertaIndex">
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#E7E7E7]' : 'bg-[#F1F1F1]' ">{{i++}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.npm}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.nama}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.absen_type}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.unit_kerja}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.nama_kapal}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.masuk.toString()}}</td>
                                    <td class="text-center" :class="(i % 2 == 0) ? 'bg-[#F1F1F1]' : 'bg-[#E7E7E7]' ">{{index.keluar.toString()}}</td>
                                    <!-- <td class="flex justify-center items-center w-20">
                                        <a class="w-1/2 flex justify-center" href="#" v-on:click="editState = !editState; selectedID=index.ID;">
                                            <svg width="22" height="22" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="line-md:edit">
                                                <g id="Group">
                                                <path id="Vector" d="M5.5 38.5H38.5" stroke="#85B6FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path id="Vector_2" d="M12.8335 31.1667V23.8333L31.1668 5.5L38.5002 12.8333L20.1668 31.1667H12.8335Z" stroke="#85B6FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path id="Vector_3" d="M25.6665 11L32.9998 18.3333" stroke="#85B6FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                </g>
                                            </svg>
                                        </a>
                                        <a class="w-1/2 flex justify-center">
                                            <svg width="22" height="22" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="mingcute:delete-2-fill" clip-path="url(#clip0_1302_63)">
                                                <g id="Group">
                                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M26.18 3.66666C26.9496 3.66686 27.6995 3.90918 28.3237 4.3593C28.9479 4.80943 29.4147 5.44453 29.6578 6.17466L30.6533 9.16666H36.6667C37.1529 9.16666 37.6192 9.35981 37.963 9.70363C38.3068 10.0474 38.5 10.5138 38.5 11C38.5 11.4862 38.3068 11.9525 37.963 12.2964C37.6192 12.6402 37.1529 12.8333 36.6667 12.8333L36.6612 12.9635L35.0717 35.2257C34.9725 36.6128 34.3515 37.9108 33.3337 38.8585C32.316 39.8062 30.977 40.3332 29.5863 40.3333H14.4137C13.023 40.3332 11.684 39.8062 10.6663 38.8585C9.64851 37.9108 9.02753 36.6128 8.92833 35.2257L7.33883 12.9617C7.33552 12.919 7.33368 12.8762 7.33333 12.8333C6.8471 12.8333 6.38079 12.6402 6.03697 12.2964C5.69315 11.9525 5.5 11.4862 5.5 11C5.5 10.5138 5.69315 10.0474 6.03697 9.70363C6.38079 9.35981 6.8471 9.16666 7.33333 9.16666H13.3467L14.3422 6.17466C14.5854 5.44424 15.0525 4.80892 15.677 4.35877C16.3016 3.90862 17.052 3.66647 17.8218 3.66666H26.18ZM16.5 18.3333C16.051 18.3334 15.6175 18.4982 15.282 18.7966C14.9464 19.095 14.732 19.5062 14.6795 19.9522L14.6667 20.1667V31.1667C14.6672 31.6339 14.8461 32.0834 15.1669 32.4232C15.4877 32.7629 15.9261 32.9674 16.3926 32.9948C16.859 33.0222 17.3184 32.8704 17.6767 32.5705C18.035 32.2706 18.2653 31.8452 18.3205 31.3812L18.3333 31.1667V20.1667C18.3333 19.6804 18.1402 19.2141 17.7964 18.8703C17.4525 18.5265 16.9862 18.3333 16.5 18.3333ZM27.5 18.3333C27.0138 18.3333 26.5475 18.5265 26.2036 18.8703C25.8598 19.2141 25.6667 19.6804 25.6667 20.1667V31.1667C25.6667 31.6529 25.8598 32.1192 26.2036 32.463C26.5475 32.8068 27.0138 33 27.5 33C27.9862 33 28.4525 32.8068 28.7964 32.463C29.1402 32.1192 29.3333 31.6529 29.3333 31.1667V20.1667C29.3333 19.6804 29.1402 19.2141 28.7964 18.8703C28.4525 18.5265 27.9862 18.3333 27.5 18.3333ZM26.18 7.33332H17.82L17.2095 9.16666H26.7905L26.18 7.33332Z" fill="#FF8585"/>
                                                </g>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_1302_63">
                                                <rect width="44" height="44" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Main> 
        <div class="backdrop-blur-sm w-full h-screen left-0 right-0 top-0 flex justify-center items-center" :class="(createState) ? 'absolute z-50' : 'hidden'">
            <div class="bg-white outline-black outline border-[15px] border-white rounded-2xl p-5">
                <div class="ml-auto w-fit cursor-pointer" v-on:click="createState = false">X</div>
                <createModals :data="data"/>
            </div>
        </div>
    </div>
</template>

<script>
import Main from './../components/Admin/Main.vue';
import {DataPesertaIndex} from './../stores/DataPeserta.js';
import icon1 from './../menu/icons/line-md_edit.svg';
import {ref, defineAsyncComponent} from 'vue'


const data = [
    {
        type: 'text',
        name: 'npm',
        title: 'Masukkan Npm',
        disabled: false,
        hidden: false
    },
    {
        type: 'text',
        name: 'nama',
        title: 'Masukkan Nama Peserta Magang',
        disabled: false,
        hidden: false
    },
    {
        type: 'text',
        name: 'absen_type',
        title: 'Masukkan Jenis Absen',
        disabled: false,
        hidden: false
    },
    {
        type: 'text',
        name: 'unit_kerja',
        title: 'Masukkan Unit Kerja',
        disabled: false,
        hidden: false
    },
    {
        type: 'text',
        name: 'nama_kapal',
        title: 'Masukkan Nama Kapal',
        disabled: false,
        hidden: false
    },
    {
        type: 'text',
        name: 'masuk',
        title: 'Waktu Masuk',
        disabled: false,
        hidden: false
    },
    {
        type: 'text',
        name: 'keluar',
        title: 'Waktu Keluar',
        disabled: false,
        hidden: false
    },
];


const createModals = defineAsyncComponent({
        loader: () => import('./../components/Admin/partials/ModalCreate.vue'),
        delay:500,
        timeout: 60000
})
const editModals = defineAsyncComponent({
        loader: () => import('./../components/Admin/partials/editModals.vue'),
        delay:500,
        timeout: 60000,

})


const label = [
    {
        name: 'Npm'
    },
    {
        name: 'Nama Peserta Magang'
    },
    {
        name: 'Jenis Absen'
    },
    {
        name: 'Unit Kerja'
    },
    {
        name: 'Nama Kapal'
    },
    {
        name: 'Waktu Masuk'
    },
    {
        name: 'Waktu Keluar'
    },
]

const createState = ref(false)
const editState = ref(false)
let i = 1
export default {
    components: {
        Main,
        icon1,
        createModals,
        editModals
    },
    setup: () => {
        return {
            DataPesertaIndex,
            label,
            i,
            createState,
            data,
            editState,
        }
    },
    name: 'Kapal'
}
</script>
<style>
    
</style>