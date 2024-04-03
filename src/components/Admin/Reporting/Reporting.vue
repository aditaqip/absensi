<template>
  <div class="w-full overflow-y-hidden">
    <div class="h-full">
      <div class="p-5 bg-slate-100 h-full">
        <div
          class="lg:w-full px-5 py-3 rounded-lg block md:block bg-white relative overflow-x-auto"
        >
          <h1 class="text-xl py-2">Report Absen Magang</h1>
          <div class="flex justify-end mb-2">
            <download-excel
              :data="dataForExcel"
              type="xlsx"
              class="text-white inline-flex items-center bg-green-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm px-5 py-2 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 hover:cursor-pointer mr-4"
              v-on:click="exportDataToExcel"
            >
              Unduh Excel
            </download-excel>
          </div>
          <hr />
          <div class="flex justify-between items-center flex-wrap mt-2">
            <div>
              Show
              <input
                type="number"
                class="mx-3 pl-5 w-16 h-6 border border-black rounded-lg"
                :value="dataMounted"
              />Data
            </div>
            <div class="flex justify-around gap-10">
              <div class="flex items-center">
                <input
                  type="text"
                  v-model="searchKeyword"
                  placeholder="Search..."
                  class="border border-gray-300 px-3 py-2 rounded-lg mr-3"
                  v-on:keyup="search"
                />
              </div>
              <div class="relative">
                <div id="app" class="relative">
                  <div
                    class="flex items-center gap-2 cursor-pointer"
                    @click="toggleDropdown"
                  >
                    <div>Filter</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      :class="{ 'transform rotate-180': dropdownOpen }"
                    >
                      <path
                        d="M4.94727 2.25C4.47485 2.25 4.02178 2.42779 3.68773 2.74426C3.35368 3.06072 3.16602 3.48995 3.16602 3.9375V5.8125C3.16602 6.03411 3.21209 6.25354 3.30161 6.45828C3.39112 6.66301 3.52233 6.84904 3.68773 7.00574C4.02178 7.32221 4.47485 7.5 4.94727 7.5H12.4681C12.702 7.5 12.9336 7.45635 13.1498 7.37155C13.3659 7.28674 13.5622 7.16244 13.7276 7.00574C13.893 6.84904 14.0242 6.66301 14.1138 6.45828C14.2033 6.25354 14.2493 6.03411 14.2493 5.8125V3.9375C14.2493 3.48995 14.0617 3.06072 13.7276 2.74426C13.3936 2.42779 12.9405 2.25 12.4681 2.25H4.94727ZM4.35352 3.9375C4.35352 3.78832 4.41607 3.64524 4.52742 3.53975C4.63877 3.43426 4.78979 3.375 4.94727 3.375H12.4681C12.6256 3.375 12.7766 3.43426 12.8879 3.53975C12.9993 3.64524 13.0618 3.78832 13.0618 3.9375V5.8125C13.0618 5.96168 12.9993 6.10476 12.8879 6.21025C12.7766 6.31574 12.6256 6.375 12.4681 6.375H4.94727C4.78979 6.375 4.63877 6.31574 4.52742 6.21025C4.41607 6.10476 4.35352 5.96168 4.35352 5.8125V3.9375ZM6.88685 12C6.58047 12 6.33268 12.252 6.33268 12.5625C6.33268 12.873 6.58047 13.125 6.88685 13.125H10.5285C10.8349 13.125 11.0827 12.873 11.0827 12.5625C11.0827 12.252 10.8349 12 10.5285 12H6.88685ZM13.7371 12.3337L13.6793 12.3967C13.5788 12.492 13.4455 12.5499 13.3037 12.56C13.1619 12.57 13.0211 12.5315 12.9067 12.4515L12.8402 12.3967L11.2568 10.8968C11.1563 10.8015 11.0952 10.6752 11.0845 10.5409C11.0739 10.4066 11.1146 10.2731 11.1991 10.1648L11.2568 10.1017L12.8402 8.60175C12.9463 8.50203 13.0881 8.44388 13.2375 8.4389C13.3868 8.43391 13.5327 8.48247 13.6459 8.57487C13.7591 8.66727 13.8314 8.79672 13.8483 8.93739C13.8652 9.07806 13.8255 9.21959 13.7371 9.33375L13.6793 9.39675L13.1101 9.9375H14.2976C14.5425 9.93742 14.7786 9.85135 14.9604 9.69592C15.1421 9.54049 15.2566 9.32675 15.2817 9.096L15.2872 9V7.3125C15.2873 7.16998 15.3444 7.03279 15.4471 6.92866C15.5498 6.82452 15.6904 6.76119 15.8405 6.75148C15.9906 6.74177 16.139 6.78639 16.2557 6.87632C16.3724 6.96626 16.4487 7.09481 16.4692 7.236L16.4747 7.3125V9C16.4747 9.52534 16.2632 10.0309 15.8831 10.4135C15.5031 10.7961 14.9833 11.0268 14.4298 11.0588L14.2976 11.0625H13.1109L13.6793 11.6017C13.7799 11.697 13.841 11.8233 13.8516 11.9576C13.8623 12.0919 13.8216 12.2254 13.7371 12.3337ZM14.2493 14.4375V12.918L14.2391 12.927C13.9184 13.2315 13.4791 13.3545 13.0618 13.2983V14.4375C13.0618 14.5867 12.9993 14.7298 12.8879 14.8352C12.7766 14.9407 12.6256 15 12.4681 15H4.94727C4.78979 15 4.63877 14.9407 4.52742 14.8352C4.41607 14.7298 4.35352 14.5867 4.35352 14.4375V10.6875C4.35352 10.5383 4.41607 10.3952 4.52742 10.2898C4.63877 10.1843 4.78979 10.125 4.94727 10.125H10.348C10.3939 9.981 10.4652 9.843 10.5633 9.71775L10.5808 9.69525L10.6758 9.59025L11.2996 9H4.94727C4.47485 9 4.02178 9.17779 3.68773 9.49426C3.35368 9.81073 3.16602 10.2399 3.16602 10.6875V14.4375C3.16602 14.8851 3.35368 15.3143 3.68773 15.6307C4.02178 15.9472 4.47485 16.125 4.94727 16.125H12.4681C12.9405 16.125 13.3936 15.9472 13.7276 15.6307C14.0617 15.3143 14.2493 14.8851 14.2493 14.4375Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div
                    v-show="dropdownOpen"
                    class="absolute bg-white border border-gray-200 mt-2 py-2 w-48 rounded-md shadow-lg z-50 right-0 overflow-y-auto max-h-48"
                  >
                    <!-- Isi dropdown di sini -->
                    <div
                      class="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                      v-for="(month, index) in months"
                      :key="index"
                      @click="selectMonth(month)"
                    >
                      {{ month }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table class="w-full">
            <thead class="w-3/5 font-thin">
              <tr class="border-b-[1px] py-1">
                <th class="py-2 px-4">No</th>
                <th class="py-2 px-7" v-for="head in label">{{ head.name }}</th>
              </tr>
            </thead>
            <tbody v-if="PesertaIndex.length == 0">
              <tr>
                <td colspan="99" class="text-center h-20 bg-slate-100">
                  No Data
                </td>
              </tr>
            </tbody>
            <tbody v-if="typeof DataPeserta !== 'undefined'">
              <tr v-for="(index, items) in DataPeserta">
                <td class="text-center py-2 px-4">{{ ++items }}</td>
                <td class="text-center py-2 px-4">{{ index.Npm }}</td>
                <td class="text-center py-2 px-4 w-60">{{ index.name }}</td>
                <td class="text-center py-2 px-4">{{ index.jenisAbsen }}</td>
                <td class="text-center py-2 px-4">{{ index.unitKerja }}</td>
                <td class="text-center py-2 px-4">{{ index.namaDivpal }}</td>
                <td class="text-center py-2 px-4">{{ index.tanggalmsk }}</td>
                <td class="text-center py-2 px-4">{{ index.checkIn }}</td>
                <td class="text-center py-2 px-4">{{ index.checkOut }}</td>
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

const searchState = ref(false);

const label = [
  {
    name: "NPM",
  },
  {
    name: "Nama",
  },
  {
    name: "Jenis Absen",
  },
  {
    name: "Unit Kerja",
  },
  {
    name: "Divisi/Kapal",
  },
  {
    name: "Tanggal Masuk",
  },
  {
    name: "Check In",
  },
  {
    name: "Check Out",
  },
];

const createState = ref(false);
const editState = ref(false);
const deleteState = ref(false);
const DataPeserta = ref();
const getId = ref(null);
const dataForExcel = [];
const data_update = ref(null);
const dataMounted = ref(15);

let i = 1;

const data_searched = ref({});

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
      searchState,
      dataForExcel,
    };
  },

  mounted() {
    this.DataPeserta = PesertaIndex;
  },

  data() {
    return {
      selectedMonth: null,
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      selectedMonth: "",
      dropdownOpen: false,
      selectedOption: "",
      DataPeserta,
      searchKeyword: "",
      nama: "",
      seacrh: "",
    };
  },
  name: "ReportingComponents",
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectMonth(month) {
      this.selectedMonth = month;
      this.dropdownOpen = false;
    },
    getMonthFromTanggalmsk(tanggalmsk) {
      // Split tanggalmsk berdasarkan "-" dan ambil elemen kedua (indeks 1), yang merupakan bulan
      const monthNumber = parseInt(tanggalmsk.split("-")[1]);
      // Mengembalikan nama bulan sesuai dengan indeksnya
      return this.months[monthNumber - 1];
    },

    search() {
      // Bersihkan filteredData sebelum melakukan pencarian baru
      this.filteredData = [];

      // Lakukan pencarian berdasarkan kata kunci pencarian
      this.filteredData = PesertaIndex.filter((item) => {
        // Menggabungkan semua nilai dari setiap sel dalam baris menjadi satu string
        const combinedValues = Object.values(item).join(" ").toLowerCase();
        // Menggunakan toLowerCase() untuk pencocokan yang tidak bersifat case-sensitive
        return combinedValues.includes(this.searchKeyword.toLowerCase());
      });

      // Periksa jika searchKeyword kosong
      if (this.searchKeyword === "") {
        this.DataPeserta = PesertaIndex;
      } else {
        this.DataPeserta = this.filteredData;
      }
    },

    exportDataToExcel() {
      if (PesertaIndex) {
        PesertaIndex.forEach((d, i) => {
          const dataRow = {
            No: ++i,
            NPM: d.Npm,
            "Nama Lengkap": d.name,
            "Jenis Absen": d.jenisAbsen,
            "Unit Kerja": d.unitKerja,
            "Divisi/Kapal": d.namaDivpal,
            "Tanggal Masuk": d.tanggalmsk,
            "Check-In": d.checkIn,
            "Check-Out": d.checkOut,
          };
          dataForExcel.push(dataRow);
        });
      }
    },
  },

  computed: {
    onSearch() {
      let data = this.PesertaIndex.filter((object) => {
        console.log(this.seacrh);

        return JSON.stringify(object)
          .toString()
          .toLowerCase()
          .includes(this.seacrh);
      });
    },
    getData() {
      return this.PesertaIndex;
    },
    filteredEntries() {
      if (!this.selectedMonth) return this.dataEntries; // Jika belum ada bulan yang dipilih, tampilkan semua entri

      return this.dataEntries.filter((entry) => {
        const entryMonth = parseInt(entry.tanggalmsk.split("-")[1]);
        return this.months[entryMonth - 1] === this.selectedMonth;
      });
    },
  },
};
</script>
<style></style>
