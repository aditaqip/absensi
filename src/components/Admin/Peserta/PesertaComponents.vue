<template>
    <div class="w-full overflow-y-auto">
        <div class="h-full">
            <div class="p-5 bg-slate-100 h-full">
                <div class="lg:w-full px-5 py-3 rounded-lg block md:block bg-white relative overflow-x-auto">
                    <h1 class="text-xl py-2">Data Peserta</h1>
                    <hr />
                    <div class="flex justify-between flex-row-reverse items-center flex-wrap">
                        <button class="bg-[#0D6EFD] text-white  rounded pl-[10px] pt-[6px] pr-[35px] pb-[5px] flex gap-2 my-4 sticky right-0" v-on:click="createState = !createState;">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="octicon:plus-16">
                                    <path id="Vector" d="M9.6875 2.5C9.93614 2.5 10.1746 2.59877 10.3504 2.77459C10.5262 2.9504 10.625 3.18886 10.625 3.4375V8.75H15.9375C16.1861 8.75 16.4246 8.84877 16.6004 9.02459C16.7762 9.2004 16.875 9.43886 16.875 9.6875C16.875 9.93614 16.7762 10.1746 16.6004 10.3504C16.4246 10.5262 16.1861 10.625 15.9375 10.625H10.625V15.9375C10.625 16.1861 10.5262 16.4246 10.3504 16.6004C10.1746 16.7762 9.93614 16.875 9.6875 16.875C9.43886 16.875 9.2004 16.7762 9.02459 16.6004C8.84877 16.4246 8.75 16.1861 8.75 15.9375V10.625H3.4375C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875C2.5 9.43886 2.59877 9.2004 2.77459 9.02459C2.9504 8.84877 3.18886 8.75 3.4375 8.75H8.75V3.4375C8.75 3.18886 8.84877 2.9504 9.02459 2.77459C9.2004 2.59877 9.43886 2.5 9.6875 2.5Z" fill="white"/>
                                    </g>
                                </svg>
                            </span>
                            <span>Tambah Data Peserta</span>
                        </button>
                        <div>Show <input type="number" class="ml-3 pl-5 w-16 h-6 border border-black rounded-lg my-8" :value="dataMounted" /></div>
                    </div>
                    <table class="w-full table whitespace-nowrap">
                        <thead class="w-3/5 font-thin">
                            <tr class="border-b-[1px]">
                                <th class="py-2">No</th>
                                <th class="px-4 py-1"  v-for="head in label">{{head.name}}</th>
                                <th class="py-2 w-20"></th>
                            </tr>
                        </thead>
                        <tbody v-if="PesertaIndex.length == 0">
                            <td colSpan="99" class="text-center h-20 bg-slate-100">No Data</td>
                        </tbody>
                        <tbody v-if="(typeof PesertaIndex != 'undefined')">
                            <tr v-for="(index, items) in PesertaIndex">
                                <td class="text-center py-2 p-3">{{++items}}</td>
                                <td class="text-center py-2 p-3">{{index.Npm}}</td>
                                <td class="text-center py-2 p-3">{{index.name}}</td>
                                <td class="text-center py-2 p-3">{{index.NIK}}</td>
                                <td class="text-center py-2 p-3">{{index.tglahir}}</td>
                                <td class="text-center py-2 p-3">{{(index.gender == "L") ? 'Laki-Laki' : 'Perempuan'}}</td>
                                <td class="text-center py-2 p-3">{{index.type}}</td>
                                <td class="text-center py-2 p-3">{{index.instance}}</td>
                                <td class="text-center py-2 p-3">{{index.pddk}}</td>
                                <td class="text-center py-2 p-3">{{index.jurusan}}</td>
                                <td class="text-center py-2 p-3">{{index.Telp}}</td>
                                <td class="text-center py-2 p-3">{{index.alamatDomisili}}</td>
                                <td class="text-center py-2 p-3">{{index.parentName}}</td>
                                <td class="text-center py-2 p-3">{{index.parentJob}}</td>
                                <!-- <td class="flex py-2 justify-center items-center w-32 gap-2">
                                    <a class="w-1/2 flex justify-center cursor-pointer rounded bg-[#0D6EFD] text-white py-1 px-5" href="#" v-on:click="editState = !editState; getId=index.ID;  data_update = index; getUpdated(data_update)">
                                        Edit
                                    </a>
                                    <a class="w-1/2 flex justify-center cursor-pointer rounded bg-[#DC3545] text-white py-1 px-5" v-on:click="deleteState = !deleteState; getId=index.ID;  data_update = index; getUpdated(data_update)">
                                       Delete
                                    </a>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="backdrop-brightness-50 w-full p-3 left-0 right-0 top-0 flex justify-center items-center" :class="(createState) ? 'absolute z-50' : 'hidden'" @click.self="createState=false">
        <form @keydown.esc="createState = false" @submit.prevent="handleSubmit" class="bg-white p-4 h-screen rounded-2xl w-4/5 p-3 md:p-14 overflow-y-auto">
            <div class="text-2xl font-medium flex">
                <div class="pb-3">
                    Tambah Peserta
                </div>
            </div>
            <div class="mt-10 grid grid-cols-2 gap-5">
                <div class="grid grid-cols-1 gap-5  col-span-2 md:col-span-1">
                    <h2 class="font-bold">Data Diri</h2>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Nama Lengkap</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="npm-id" name="npm" type="text" v-model="nama" placeholder="Masukkan Nama Lengkap"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">NIK</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="npm-id" name="npm" type="text" v-model="nik" placeholder="Masukkan NIK"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Tempat, tanggal lahir</label>
                            </div>
                            <div class="flex gap-3 flex-wrap">
                                <input class="border rounded border-black px-3 focus:outline-none py-3 pl-3"  id="npm-id" name="npm" type="text" v-model="bornPlace" placeholder="Masukkan Tempat Lahir"/>
                                <datepicker class="border rounded border-black px-3 focus:outline-none py-3 pl-3"  v-model="bornAt" />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1 h-full">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Jenis Kelamin</label>
                            </div>
                            <div class="flex h-full items-center">
                                <div>
                                    <input class="border mr-2 md:mr-4 p-4 inline rounded border-black px-3 focus:outline-none"  id="npm-id" name="npm" type="radio" v-model="genders" placeholder="Masukkan Npm" value="Laki Laki"/>Laki - Laki
                                </div>
                                <div>
                                    <input class="border mr-2 md:mr-4 ml-3 p-4 inline rounded border-black px-3 focus:outline-none"  id="npm-id" name="npm" type="radio" v-model="genders" placeholder="Masukkan Npm" value="Perempuan"/>Perempuan
                                </div>
                            </div>
                        </div>
                    </div>
                    <SelectInput v-model="ptnType" label="PTN/PTS" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Nama Instansi</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="instance-id" name="instance" type="text" v-model="instance" placeholder="Masukkan Nama Instansi"/>
                            </div>
                        </div>
                    </div>
                    <SelectInput v-model="ptnType" label="Jenjang Pendidikan" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Telp</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="nomor-id" name="nomor" type="text" v-model="nomor" placeholder="Masukkan Npm"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-5 col-span-2 md:col-span-1">
                    <h2 class="font-bold mt-5 md:mt-0">Data Magang</h2>
                    <SelectInput v-model="ptnType" label="Jenis Magang" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          
                    <SelectInput v-model="magangProgram" label="Program Magang" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          
                    <SelectInput v-model="commitAt" label="Bulan Pelaksanaan" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          
                    <SelectInput v-model="duration" label="Durasi Magang" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3 ">
                            <div class="font-semibold">
                                <label for="nama-id">Alamat Domisili</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="domisili-id" name="domisili" type="text" v-model="domisili" placeholder="Masukkan Domisili"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3 ">
                            <div class="font-semibold">
                                <label for="nama-id">Nama Ortu</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="namaOrtu-id" name="namaOrtu" type="text" v-model="namaOrtu" placeholder="Masukkan Nama Orang Tua"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3 ">
                            <div class="font-semibold">
                                <label for="nama-id">Pekerjaan Ortu</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"  id="pekerjaanOrtu-id" name="pekerjaanOrtu" type="text" v-model="pekerjaanOrtu" placeholder="Masukkan Pekerjaan Orang Tua"/>
                            </div>
                        </div>
                    </div>
                    <SelectInput v-model="ptnType" label="Divisi Penempatan Magang" :disabled="false" :data="[{label : 'test',value:'test'}]"/>                          

                </div>
            </div>
            <div class="flex justify-center gap-3 mt-8">
                <button type='submit' class="border rounded-full bg-[#BFBDBD] hover:bg-[#898787] text-white px-5 py-3">Batal</button>
                <button type='submit' class="border rounded-full bg-[#60A7DB] hover:bg-[#5696c4] text-white px-5 py-3">Simpan</button>
            </div>
        </form>
    </div>
    <div class="backdrop-brightness-50 w-full h-screen left-0 right-0 top-0 flex justify-center items-center" :class="(deleteState) ? 'absolute z-50' : 'hidden'">
        <form @keydown.esc="deleteState = false" @submit.prevent="handleSubmit" class="bg-white border-[15px] border-white rounded-2xl w-4/5 md:w-2/5 p-14">
            <div class="text-2xl font-medium text-center flex justify-center">
                <div class="border-b-2 border-black pb-3 px-9">
                    Delete Peserta
                </div>
            </div>
            <div class="mt-10 flex flex-col gap-9">
                <div>
                    <div class="flex flex-col gap-3">
                        <div class="font-semibold">
                            <label for="npm-id">Npm</label>
                        </div>
                        <div>
                            <input class="border w-full rounded border-none px-3 focus:outline-none py-3 pl-3" readonly  id="npm-id" name="npm" type="text" v-model="npm" placeholder="Masukkan Npm"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col gap-3">
                        <div class="font-semibold">
                            <label for="nama-id">Nama</label>
                        </div>
                        <div>
                            <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3" readonly id="nama-id" name="nama" type="text" v-model="nama" placeholder="Masukkan Nama"/>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center gap-3 mt-8">
                    <button type='submit' class="border rounded-full bg-[#DC3545] hover:bg-[#8b353f] text-white px-5 py-3">Delete</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import {ref, defineAsyncComponent} from 'vue'
import {PesertaIndex} from './../../../stores/Peserta.js'
import Escapable from './../partials/Escapable.js'
import SelectInput from './partials/SelectInput.vue'
import datepicker from 'vue3-datepicker'



const label = [
    {
        name: 'NPM'
    },
    {
        name: 'Nama'
    },
    {
        name: 'NIK'
    },
    {
        name: 'Tempat, Tanggal Lahir'
    },
    {
        name: 'Jenis kelamin'
    },
    {
        name: 'PTN/PTS'
    },
    {
        name: 'Nama Instansi'
    },
    {
        name: 'Jenjang Pendidikan'
    },
    {
        name: 'Jurusan'
    },
    {
        name: 'Telepon'
    },
    {
        name: 'Alamat Domisili'
    },
    {
        name: 'Nama Ortu'
    },
    {
        name: 'Pekerjaan Ortu'
    },
]

const createState = ref(false)
const editState = ref(false)
const deleteState = ref(false)
const dataMounted = ref(15)

const getId = ref(null)

const data_update = ref(null)

let i = 1

const data_effect = ref(PesertaIndex)
export default {
    watch: {
        PesertaIndex: {
            deep: true,
            handler(newValue, oldValue) {

            }
        }
    },
    // mixins: [Escapable],
    components: {
    SelectInput,
    datepicker
},
    setup: () => {
        return {
            PesertaIndex,
            label,
            i,
            createState,
            editState,
            deleteState,
            dataMounted
        }
    },
    data() {
        return {
            npm: '',
            nama: '',
            nik: '',
            bornPlace: '',
            bornAt: '',
            genders: '',
            ptType: '',
            instance: '',
            pddk: '',
            jurusan: '',
            nomor: '',
            magangType: '',
            magangProgram: '',
            commitAt: '',
            duration: '',
            domisili: '',
            namaOrtu: '',
            pekerjaanOrtu: '',
            division: '',
            ptnType: '',
            dataEdit: null,
            picked: new Date()

        }
    },
    name: 'PesertaComponents',
    computed: {
        paginate(){
            
        },
        size(){

        }
    },
    methods: {
        outsideClicked() {
            // this.createState = false
            console.log('msk')
        },
        handleSubmit(e){
            const { [Object.keys(PesertaIndex).pop()]: lastItem } = PesertaIndex;
                const newID = parseInt(lastItem.ID)

                PesertaIndex.push({
                    name: this.nama,
                    Npm: this.npm,
                    ID: newID + 1
                });
                this.nama = ''
                this.npm = ''
                createState.value = false
        },
    }, 
    // created() {
    //     const escapeHandler = (e) => {
    //         if (e.key === 'Escape' && this.escapableVisible) {
    //             this.escapeHandler();
    //         }
    //     }
        
    //     document.addEventListener('keydown', escapeHandler);

    //     this.$once('hook:destroyed', () => {
    //         document.removeEventListener('keydown', escapeHandler);
    //     });
    // }

   
}
</script>
<style lang="">
    
</style>