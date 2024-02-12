<template>
    <div class="w-full overflow-y-auto">
        <div class="h-full">
            <div class="p-5 bg-slate-100 h-full">
                <div class="lg:w-full px-5 py-3 rounded-lg block md:block bg-white relative overflow-x-auto">
                    <h1 class="text-xl py-2">Data Peserta</h1>
                    <hr />
                    <div class="flex justify-between flex-row-reverse items-center flex-wrap">
                        <button
                            class="bg-[#0D6EFD] text-white  rounded pl-[10px] pt-[6px] pr-[35px] pb-[5px] flex gap-2 my-4 sticky right-0"
                            v-on:click="createState = !createState;">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g id="octicon:plus-16">
                                        <path id="Vector"
                                            d="M9.6875 2.5C9.93614 2.5 10.1746 2.59877 10.3504 2.77459C10.5262 2.9504 10.625 3.18886 10.625 3.4375V8.75H15.9375C16.1861 8.75 16.4246 8.84877 16.6004 9.02459C16.7762 9.2004 16.875 9.43886 16.875 9.6875C16.875 9.93614 16.7762 10.1746 16.6004 10.3504C16.4246 10.5262 16.1861 10.625 15.9375 10.625H10.625V15.9375C10.625 16.1861 10.5262 16.4246 10.3504 16.6004C10.1746 16.7762 9.93614 16.875 9.6875 16.875C9.43886 16.875 9.2004 16.7762 9.02459 16.6004C8.84877 16.4246 8.75 16.1861 8.75 15.9375V10.625H3.4375C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875C2.5 9.43886 2.59877 9.2004 2.77459 9.02459C2.9504 8.84877 3.18886 8.75 3.4375 8.75H8.75V3.4375C8.75 3.18886 8.84877 2.9504 9.02459 2.77459C9.2004 2.59877 9.43886 2.5 9.6875 2.5Z"
                                            fill="white" />
                                    </g>
                                </svg>
                            </span>
                            <span>Tambah Data Peserta</span>
                        </button>
                        <div>Show <input type="number" class="ml-3 pl-5 w-16 h-6 border border-black rounded-lg my-8"
                                :value="dataMounted" /></div>
                    </div>
                    <table class="w-full table whitespace-nowrap">
                        <thead class="w-3/5 font-thin">
                            <tr class="border-b-[1px]">
                                <th class="py-2">No</th>
                                <th class="px-4 py-1" v-for="head in label">{{ head.name }}</th>
                                <th class="py-2 w-20"></th>
                            </tr>
                        </thead>
                        <tbody v-if="PesertaIndex.length == 0">
                            <td colSpan="99" class="text-center h-20 bg-slate-100">No Data</td>
                        </tbody>
                        <tbody v-if="(typeof PesertaIndex != 'undefined')">
                            <tr v-for="(index, items) in datas.value">
                                <td class="text-center py-2 p-3">{{+ + items }}</td>
                                <td class="text-center py-2 p-3">{{ index.npm }}</td>
                                <td class="text-center py-2 p-3">{{ index.namalengkap }}</td>
                                <td class="text-center py-2 p-3">{{ index.nik }}</td>
                                <td class="text-center py-2 p-3">{{ index.ttl }}</td>
                                <td class="text-center py-2 p-3">{{ index.jeniskelamin }}</td>
                                <td class="text-center py-2 p-3">{{ index.jenismagang }}</td>
                                <td class="text-center py-2 p-3">{{ index.namainstansi }}</td>
                                <td class="text-center py-2 p-3">{{ index.jenjangpendidikan }}</td>
                                <td class="text-center py-2 p-3">{{ index.jurusan }}</td>
                                <td class="text-center py-2 p-3">{{ index.notelp }}</td>
                                <td class="text-center py-2 p-3">{{ index.alamat }}</td>
                                <td class="text-center py-2 p-3">{{ index.namaortu }}</td>
                                <td class="text-center py-2 p-3">{{ index.pekerjaanortu }}</td>
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
    <div class="backdrop-brightness-50 w-full p-3 left-0 right-0 top-0 flex justify-center items-center"
        :class="(createState) ? 'absolute z-50' : 'hidden'" @click.self="createState = false">
        <form @keydown.esc="createState = false" @submit.prevent="handleSubmit"
            class="bg-white p-4 h-screen rounded-2xl w-4/5 p-3 md:p-14 overflow-y-auto">
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
                                <label for="npm-id">NPM</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3" id="npm-id"
                            name="NPM" type="number" v-model="numberInput" placeholder="Masukkan NPM" @input="handleInput" />
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="name-id">Nama Lengkap</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="name-id" name="nama" type="text" v-model="namaLengkap"
                                    placeholder="Masukkan Nama Lengkap" />
                            </div>
                        </div>
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">NIK</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="nik-id" name="nik" type="number" v-model="numberInput" placeholder="Masukkan NIK" />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Tempat, Tanggal Lahir</label>
                            </div>
                            <div class="flex gap-3 flex-wrap">
                                <input class="border rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="bornPlace-id" name="bornPlace" type="text" v-model="bornPlace"
                                    placeholder="Masukkan Tempat Lahir" />
                                <datepicker class="border rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    v-model="bornAt" />
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
                                    <input
                                        class="border mr-2 md:mr-4 p-4 inline rounded border-black px-3 focus:outline-none"
                                        id="genders-id" name="genders" type="radio" v-model="genders"
                                        value="Laki Laki" />Laki - Laki
                                </div>
                                <div>
                                    <input
                                        class="border mr-2 md:mr-4 ml-3 p-4 inline rounded border-black px-3 focus:outline-none"
                                        id="genders-id" name="genders" type="radio" v-model="genders"
                                        value="Perempuan" />Perempuan
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="ptnType-id'">PTN/PTS</label>
                        </div>
                        <v-select v-model="ptnType" name="ptnTpe" :options="['PTN', 'PTS']" id="ptnType-id'"
                            :required="true" :disabled="false" placeholder="'Masukkan PTN/PTS'"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Nama Instansi</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="instance-id" name="instance" type="text" v-model="instance"
                                    placeholder="Masukkan Nama Instansi" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="pddk-id'">Jenjang Pendidikan</label>
                        </div>
                        <v-select v-model="pddk" name="ptnTpe"
                            :options="['D1', 'D2', 'D3', 'D4', 'S1', 'DP-III-ATT', 'DP-III-ANT', 'DP-IV-ATT', 'DP-IV-ANT']"
                            id="pddk-id'" :required="true" :disabled="false" placeholder="Masukkan Jenjang Pendidikan"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>
                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <div class="col-span-2 md:col-span-1">
                                <div class="flex flex-col gap-3">
                                    <div class="font-semibold">
                                        <label for="npm-id">Jurusan</label>
                                    </div>
                                    <div>
                                        <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                            id="jurusan-id" name="jurusan" type="text" v-model="jurusan"
                                            placeholder="Masukkan Jurusan" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="npm-id">Telp</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="nomor-id" name="nomor" type="number" v-model="inputNumber" placeholder="Masukkan No Telp"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-5 col-span-2 md:col-span-1">
                    <h2 class="font-bold mt-5 md:mt-0">Data Magang</h2>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="magangType-id'">Jenis Magang</label>
                        </div>
                        <v-select v-model="magangType" name="ptnTpe" :options="['Magang Darat', 'Magang Laut']"
                            id="magangType-id'" :required="true" :disabled="false" placeholder="Masukkan Jenis Magang"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="magangProgram-id'">Program Magang</label>
                        </div>
                        <v-select v-model="magangProgram" name="ptnTpe" :options="['MSIB Kampus Merdeka Kemendikbud', 'Reguler', 'MAGENTA KBUMN']"
                            id="magangProgram-id'" :required="true" :disabled="false" placeholder="Masukkan Program Magang"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="commitAt-id'">Bulan Pelaksanaan</label>
                        </div>
                        <v-select v-model="commitAt" name="ptnTpe" :options="Bulan" id="commitAt-id'" :required="true"
                            :disabled="false" placeholder="Masukkan Bulan Pelaksanaan"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="duration-id'">Durasi Magang</label>
                        </div>
                        <v-select v-model="duration" name="ptnTpe" :options="['3 Bulan', '4 Bulan', '6 Bulan', '12 Bulan']"
                            id="duration-id'" :required="true" :disabled="false" placeholder="Masukkan Durasi Magang"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>

                    <div>
    <div class="flex">
      <div class="w-1/2 pr-3">
        <label class="font-semibold" for="start-date">Tanggal Mulai</label>
        <div class="flex gap-3 flex-wrap">
          <datepicker
            ref="startDatepicker"
            class="border rounded border-black px-3 focus:outline-none py-3 pl-3 w-full"
            v-model="startDate"
            id="start-date"
            @input="updateEndDatepicker"
          ></datepicker>
        </div>
      </div>

      <div class="w-1/2 pl-3">
        <label class="font-semibold" for="end-date">Tanggal Selesai</label>
        <div class="flex gap-3 flex-wrap">
          <datepicker
            ref="endDatepicker"
            class="border rounded border-black px-3 focus:outline-none py-3 pl-3 w-full"
            v-model="endDate"
            id="end-date"
          ></datepicker>
        </div>
      </div>
    </div>
  </div>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="division-id'">Divisi Penempatan Magang</label>
                        </div>
                        <v-select v-model="division" name="ptnTpe" :options="UnitKerjaIndex" id="division-id'"
                            :required="true" :disabled="false" placeholder="Masukkan Divisi Penempatan Magang"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>

                    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                            <label class="font-semibold" for="division-id'">Unit Kerja</label>
                        </div>
                        <v-select v-model="division" name="ptnTpe" :options="DivisiIndex" id="division-id'"
                            :required="true" :disabled="false" placeholder="Masukkan Divisi Penempatan Magang"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div v-if="magangType === 'Magang Laut'" class="font-semibold">
                                <label for="nama-id">Nama Kapal</label>
                                <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
                        <div>
                        </div>
                        <v-select v-model="division" name="ptnTpe" :options="NamaKapalIndex" id="division-id'"
                            :required="true" :disabled="false" placeholder="Pilih Nama Kapal"
                            class="select w-full cico-select rounded-xl"></v-select>
                    </div>
                            </div>
                            <div v-else>
                                <!-- Tidak ada elemen yang ditampilkan -->
                            </div>
                        </div>
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3">
                            <div class="font-semibold">
                                <label for="domisili-id">Alamat Domisili</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="domisili-id" name="domisili" type="text" v-model="domisili"
                                    placeholder="Masukkan Domisili" />
                            </div>
                        </div>
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3 ">
                            <div class="font-semibold">
                                <label for="nama-id">Nama Ortu</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="namaOrtu-id" name="namaOrtu" type="text" v-model="namaOrtu"
                                    placeholder="Masukkan Nama Orang Tua" />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex flex-col gap-3 ">
                            <div class="font-semibold">
                                <label for="nama-id">Pekerjaan Ortu</label>
                            </div>
                            <div>
                                <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                                    id="pekerjaanOrtu-id" name="pekerjaanOrtu" type="text" v-model="pekerjaanOrtu"
                                    placeholder="Masukkan Pekerjaan Orang Tua" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="flex justify-center gap-3 mt-8">
                <button type='submit'
                    class="border rounded-full bg-[#BFBDBD] hover:bg-[#898787] text-white px-5 py-3">Batal</button>
                <button type='submit'
                    class="border rounded-full bg-[#60A7DB] hover:bg-[#5696c4] text-white px-5 py-3">Simpan</button>
            </div>
        </form>
    </div>
    <div class="backdrop-brightness-50 w-full h-screen left-0 right-0 top-0 flex justify-center items-center"
        :class="(deleteState) ? 'absolute z-50' : 'hidden'">
        <form @keydown.esc="deleteState = false" @submit.prevent="handleSubmit"
            class="bg-white border-[15px] border-white rounded-2xl w-4/5 md:w-2/5 p-14">
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
                            <input class="border w-full rounded border-none px-3 focus:outline-none py-3 pl-3" readonly
                                id="npm-id" name="npm" type="text" v-model="npm" placeholder="Masukkan Npm" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col gap-3">
                        <div class="font-semibold">
                            <label for="nama-id">Nama</label>
                        </div>
                        <div>
                            <input class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3" readonly
                                id="nama-id" name="nama" type="text" v-model="nama" placeholder="Masukkan Nama" />
                        </div>
                    </div>
                </div>
                <div class="flex justify-center gap-3 mt-8">
                    <button type='submit'
                        class="border rounded-full bg-[#DC3545] hover:bg-[#8b353f] text-white px-5 py-3">Delete</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { PesertaIndex } from './../../../stores/Peserta.js'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import datepicker from 'vue3-datepicker'
import axios from 'axios'

const npmRef = ref(false)
const namaRef = ref(false)
const nikRef = ref(false)
const bornPlaceRef = ref(false)
const bornAtRef = ref(false)
const gendersRef = ref(false)
const instanceRef = ref(false)
const pddkRef = ref(false)
const jurusanRef = ref(false)
const nomorRef = ref(false)
const magangTypeRef = ref(false)
const magangProgramRef = ref(false)
const commitAtRef = ref(false)
const durationRef = ref(false)
const domisiliRef = ref(false)
const namaOrtuRef = ref(false)
const pekerjaanOrtuRef = ref(false)
const divisionRef = ref(false)
const ptnTypeRef = ref(false)

const Bulan = [
    { label: "Januari", code: 1 },
    { label: "Februari", code: 2 },
    { label: "Maret", code: 3 },
    { label: "April", code: 4 },
    { label: "Mei", code: 5 },
    { label: "Juni", code: 6 },
    { label: "Juli", code: 7 },
    { label: "Agustus", code: 8 },
    { label: "September", code: 9 },
    { label: "Oktober", code: 10 },
    { label: "November", code: 11 },
    { label: "Desember", code: 12 },
]

const UnitKerjaIndex = []



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

const datas = ref({})

const createState = ref(false)
const editState = ref(false)
const deleteState = ref(false)
const dataMounted = ref(15)
const numberInput = ref("")

const getId = ref(null)

const data_update = ref(null)

let i = 1

const data_effect = ref(PesertaIndex)
export default {
    watch: {
        datas: {
            deep: true,
            handler(newValue, oldValue) {

            }
        }
    },
    // mixins: [Escapable],
    components: {
        datepicker,
        vSelect

    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.getDataPeserta()
                this.getDataUnitKerja()
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        )
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
            startDate: "",
            endDate: "",
            UnitKerjaIndex,
            datas,
            Bulan,
            npm: '',
            nama: '',
            nik: '',
            bornPlace: '',
            bornAt: "",
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
            picked: new Date(),
            npmRef,
            namaRef,
            nikRef,
            bornPlaceRef,
            // bornAtRef,
            gendersRef,
            ptnTypeRef,
            instanceRef,
            pddkRef,
            jurusanRef,
            nomorRef,
            magangTypeRef,
            magangProgramRef,
            commitAtRef,
            durationRef,
            domisiliRef,
            namaOrtuRef,
            pekerjaanOrtuRef,
            divisionRef,
            ptnTypeRef,

        }
    },
    name: 'PesertaComponents',
    methods: {
        async getDataPeserta() {
            await axios.get('/data-peserta').then(e => {
                this.datas.value = e.data.content
                console.log(this.datas)
            }).catch(e => console.log(e));
        },
        async handleSubmit(e) {

            console.log(this.npm)
            console.log(this.nama)
            console.log(this.nik)
            console.log(this.bornPlace)
            console.log(this.bornAt)
            console.log(this.genders)
            console.log(this.ptnType)
            console.log(this.instance)
            console.log(this.pddk)
            console.log(this.jurusan)
            console.log(this.nomor)
            console.log(this.magangType)
            console.log(this.magangProgram)
            console.log(this.commitAt.code)
            console.log(this.duration)
            console.log(this.domisili)
            console.log(this.namaOrtu)
            console.log(this.pekerjaanOrtu)
            console.log(this.division)
            console.log(this.ptnType)

            npmRef.value = (this.npm != '') ? false : true
            namaRef.value = (this.nama != '') ? false : true
            nikRef.value = (this.nik != '') ? false : true
            bornPlaceRef.value = (this.bornPlace != '') ? false : true
            bornAtRef.value = (this.bornAt != '') ? false : true
            gendersRef.value = (this.genders != '') ? false : true
            instanceRef.value = (this.instance != '') ? false : true
            pddkRef.value = (this.pddk != '') ? false : true
            jurusanRef.value = (this.jurusan != '') ? false : true
            nomorRef.value = (this.nomor != '') ? false : true
            magangTypeRef.value = (this.magangType != '') ? false : true
            magangProgramRef.value = (this.magangProgram != '') ? false : true
            commitAtRef.value = (this.commitAt != '') ? false : true
            durationRef.value = (this.duration != '') ? false : true
            domisiliRef.value = (this.domisili != '') ? false : true
            namaOrtuRef.value = (this.namaOrtu != '') ? false : true
            pekerjaanOrtuRef.value = (this.pekerjaanOrtu != '') ? false : true
            divisionRef.value = (this.division != '') ? false : true
            ptnTypeRef.value = (this.ptnType != '') ? false : true

            // if(!npmRef.value) return false
            // if(!namaRef.value) return false
            // if(!nikRef.value) return false
            // if(!bornPlaceRef.value) return false
            // if(!bornAtRef.value) return false
            // if(!gendersRef.value) return false
            // if(!instanceRef.value) return false
            // if(!pddkRef.value) return false
            // if(!jurusanRef.value) return false
            // if(!nomorRef.value) return false
            // if(!magangTypeRef.value) return false
            // if(!magangProgramRef.value) return false
            // if(!commitAtRef.value) return false
            // if(!durationRef.value) return false
            // if(!domisiliRef.value) return false
            // if(!namaOrtuRef.value) return false
            // if(!pekerjaanOrtuRef.value) return false
            // if(!divisionRef.value) return false
            // if(!ptnTypeRef.value) return false


            await axios.post('/data-peserta', {
                npm: this.npm,
                nama: this.nama,
                nik: this.nik,
                bornPlace: this.bornPlace,
                bornAt: this.bornAt,
                startDate: this.startDate,
                genders: this.genders,
                ptType: this.ptType,
                instance: this.instance,
                pddk: this.pddk,
                jurusan: this.jurusan,
                nomor: this.nomor,
                magangType: this.magangType,
                magangProgram: this.magangProgram,
                commitAt: this.commitAt.code,
                duration: this.duration,
                domisili: this.domisili,
                namaOrtu: this.namaOrtu,
                pekerjaanOrtu: this.pekerjaanOrtu,
                division: this.division,
                ptnType: this.ptnType,
            }).then(e => {
                this.getDataPeserta()
            })
                .catch(e => console.log(e))
        },
        getDataUnitKerja(page = 0) {
            axios.get('/unitkerja?size=999&page=' + page).then(e => {
                let data = []
                console.log(e.data.content)
                e.data.content.forEach(element => {
                    data.push({ label: element.namadivisi })
                });
                this.UnitKerjaIndex = data
            }).catch(e => console.log(e));
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