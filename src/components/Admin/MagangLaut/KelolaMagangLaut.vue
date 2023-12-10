<template>
    <div class="w-full overflow-x-auto">
        <div class="h-full">
            <div class="p-5 bg-slate-100 h-full">
                <div class="lg:w-full px-5 py-3 rounded-lg block md:block bg-white relative overflow-x-auto">
                    <h1 class="text-xl py-2">Data Peserta Magang Laut</h1>
                    <hr />
                    <div class="flex justify-between items-center flex-wrap mt-2">
                        <div>Show <input type="number" class="mx-3 pl-5 w-16 h-6 border border-black rounded-lg" :value="dataMounted" />Data</div>
                    </div>
                    <table class="w-full">
                        <thead class="w-3/5 font-thin">
                            <tr class="border-b-[1px]">
                                <th class="py-2">No</th>
                                <th class="py-2"  v-for="head in label">{{head.name}}</th>
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
</template>

<script>
import {ref, defineAsyncComponent} from 'vue'
import {PesertaIndex} from '../../../stores/Peserta.js'





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

const getId = ref(null)

const data_update = ref(null)
const dataMounted = ref(15)

let i = 1

const data_effect = ref(PesertaIndex)
export default {
    components: {
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
            nama: '',
        }
    },
    name: 'KelolaMagangLautComponents',
    methods: {
        escHandling() {
            // this.createState = false
            console.log('msk')
        },
        handleSubmit(e){
            const { [Object.keys(PesertaIndex).pop()]: lastItem } = PesertaIndex;
                const newID = parseInt(lastItem.ID)

                PesertaIndex.push({
                    Division: this.nama,
                    ID: newID + 1
                });
                this.nama = ''
                createState.value = false
        },
        deleted(id) {
            PesertaIndex.splice(PesertaIndex.findIndex(a => a.ID === id) , 1)
            getId.value = null
            deleteState.value = false
        },
        getUpdated(data){
            this.nama = data.Division
        },
        edited(id){
            let no = PesertaIndex.findIndex(a => a.ID === id)
            PesertaIndex[no].Division = this.nama
            this.nama = ''
            editState.value = false
        }
    }

   
}
</script>
<style lang="">
    
</style>