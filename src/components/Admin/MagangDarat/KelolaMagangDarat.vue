<template>
  <div class="w-full overflow-x-auto">
    <div class="h-full">
      <div class="p-5 bg-slate-100 h-full">
        <div
          class="lg:w-full px-5 py-3 rounded-lg block md:block bg-white relative overflow-x-auto"
        >
          <h1 class="text-xl py-2">Data Peserta Magang Darat</h1>
          <hr />
          <div class="flex justify-between items-center flex-wrap my-8">
            <div>
              Show
              <input
                type="number"
                class="mx-3 pl-5 w-16 h-6 border border-black rounded-lg"
                :value="dataMounted"
              />Data
            </div>
            <download-excel
              :data="dataForExcel"
              type="xlsx"
              class="text-white inline-flex items-center bg-green-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm px-5 py-2 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 hover:cursor-pointer mr-4"
              v-on:click="exportDataToExcel"
            >
              Unduh Excel
            </download-excel>
          </div>
          <table class="w-full table whitespace-nowrap">
            <thead class="w-3/5 font-thin">
              <tr class="border-b-[1px]">
                <th class="py-2">No</th>
                <th class="px-4 py-1" v-for="head in label">{{ head.name }}</th>
              </tr>
            </thead>
            <tbody v-if="PesertaIndex.length == 0">
              <td colSpan="99" class="text-center h-20 bg-slate-100">
                No Data
              </td>
            </tbody>
            <tbody v-if="typeof PesertaIndex !== 'undefined'">
              <tr
                v-for="(index, items) in PesertaIndex.filter(
                  (item) => item.JenisMagang === 'Magang Darat'
                )"
              >
                <td class="text-center py-2 p-3">{{ ++items }}</td>
                <td class="text-center py-2 p-3">{{ index.Npm }}</td>
                <td class="text-center py-2 p-3">{{ index.name }}</td>
                <td class="text-center py-2 p-3">
                  {{ index.gender === "L" ? "Laki-Laki" : "Perempuan" }}
                </td>
                <td class="text-center py-2 p-3">{{ index.Telp }}</td>
                <td class="text-center py-2 p-3">{{ index.jurusan }}</td>
                <td class="text-center py-2 p-3">{{ index.namaDivpal }}</td>
                <td class="text-center py-2 p-3">{{ index.unitKerja }}</td>
                <td class="text-center py-2 p-3">{{ index.tgls }}</td>
                <td class="text-center py-2 p-3">{{ index.durasi }}</td>
                <td class="text-center py-2 p-3">{{ index.tgle }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
import { PesertaIndex } from "../../../stores/Peserta.js";
import JsonExcel from "vue-json-excel3";

// let dataTable = reactive({})

// const exportDataToExcel = () => {
//   if (dataTable) {
//     dataTable.forEach((d) => {
//       const dataRow = {
//         Nama: d.user.nama,
//         Jabatan: d.user.jabatan.nama,
//         'Jenis Kelamin': d.user.jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan',
//         'Tempat Masuk': d.tempatMasuk,
//         'Metode Masuk': d.metodeMasuk,
//         'Metode Keluar': d.metodeKeluar ?? '-',
//         'Waktu Masuk': new Date(d.waktuMasuk).toLocaleString('en-US', {
//           year: 'numeric',
//           month: 'short',
//           day: 'numeric',
//           hour: 'numeric',
//           minute: 'numeric',
//           hour12: true
//         }),
//         'Waktu Keluar': d.waktuKeluar
//           ? new Date(d.waktuKeluar).toLocaleString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//           })
//           : '-'
//       }
//       dataForExcel.push(dataRow)
//     })
//   }
// }

const label = [
  {
    name: "NPM",
  },
  {
    name: "Nama Lengkap",
  },
  {
    name: "Jenis Kelamin",
  },
  {
    name: "No. Telepon",
  },
  {
    name: "Jurusan",
  },
  {
    name: "Divisi",
  },
  {
    name: "Unit Kerja",
  },
  {
    name: "Tanggal Mulai",
  },
  {
    name: "Durasi",
  },
  {
    name: "Tanggal Selesai",
  },
];

const createState = ref(false);
const editState = ref(false);
const deleteState = ref(false);
const getId = ref(null);
const dataForExcel = [];
const data_update = ref(null);
const dataMounted = ref(15);

let i = 1;

const data_effect = ref(PesertaIndex);
export default {
  components: {
    downloadExcel: JsonExcel,
  },
  setup: () => {
    return {
      PesertaIndex,
      label,
      i,
      createState,
      editState,
      deleteState,
      dataMounted,
      dataForExcel,
    };
  },
  data() {
    return {
      dataMounted: 10, // Ganti dengan jumlah data default yang sesuai
      filteredDataForExcel: [], // inisialisasi properti filteredDataForExcel
    };
  },
  name: "KelolaMagangDaratComponents",
  methods: {
    exportDataToExcel() {
      if (PesertaIndex) {
        let i = 0; // Inisialisasi i di luar forEach
        PesertaIndex.forEach((d) => {
          if (d.JenisMagang === "Magang Darat") {
            const dataRow = {
              No: ++i,
              NPM: d.Npm,
              "Nama Lengkap": d.name,
              "Jenis Kelamin": d.gender,
              "No Telp": d.Telp,
              Jurusan: d.jurusan,
              Divisi: d.namaDivpal,
              "Unit Kerja": d.unitKerja,
              "Tanggal Mulai": d.tgls,
              Durasi: d.durasi,
              "Tanggal Selesai": d.tgle,
            };
            dataForExcel.push(dataRow);
          }
        });
      }
    },

    escHandling() {
      // this.createState = false
      console.log("msk");
    },
    handleSubmit(e) {
      const { [Object.keys(PesertaIndex).pop()]: lastItem } = PesertaIndex;
      const newID = parseInt(lastItem.ID);

      PesertaIndex.push({
        Division: this.nama,
        ID: newID + 1,
      });
      this.nama = "";
      createState.value = false;
    },
    deleted(id) {
      PesertaIndex.splice(
        PesertaIndex.findIndex((a) => a.ID === id),
        1
      );
      getId.value = null;
      deleteState.value = false;
    },
    getUpdated(data) {
      this.nama = data.Division;
    },
    edited(id) {
      let no = PesertaIndex.findIndex((a) => a.ID === id);
      PesertaIndex[no].Division = this.nama;
      this.nama = "";
      editState.value = false;
    },
  },
};
</script>
<style lang=""></style>
