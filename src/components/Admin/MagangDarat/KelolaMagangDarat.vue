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
                v-model="dataMounted"
                @input="updateDataMounted"
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
            <tbody>
              <tr v-for="(index, items) in slicedData" :key="index.ID">
                <td class="text-center py-2 p-3">{{ items + 1 }}</td>
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
import { ref } from "vue";
import { PesertaIndex } from "../../../stores/Peserta.js";
import JsonExcel from "vue-json-excel3";

export default {
  components: {
    downloadExcel: JsonExcel,
  },
  setup() {
    const dataMounted = ref(50);
    const dataForExcel = ref([]);

    const updateDataMounted = () => {
      slicedData.value = PesertaIndex.filter(
        (item) => item.JenisMagang === "Magang Darat"
      ).slice(0, dataMounted.value);
    };

    const exportDataToExcel = () => {
      const filteredData = PesertaIndex.filter(
        (item) => item.JenisMagang === "Magang Darat"
      );

      dataForExcel.value = filteredData.map((d, index) => ({
        No: index + 1,
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
      }));

      // Force re-render of downloadExcel component
      dataForExcel.value = [...dataForExcel.value];
    };

    const slicedData = ref([]);
    updateDataMounted();

    return {
      PesertaIndex,
      dataMounted,
      dataForExcel,
      slicedData,
      updateDataMounted,
      exportDataToExcel,
    };
  },
};
</script>
<style lang=""></style>