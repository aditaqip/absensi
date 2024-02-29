<template>
  <div class="w-full">
    <div class="p-3 md:p-7">
      <div class="bg-white rounded-[20px] p-5 overflow-x-auto">
        <div class="w-full flex justify-between flex-wrap">
          <h1 style="font-size: 2em; font-weight: bold">
            Grafik Peserta Magang
          </h1>
          <div>
            <select
              v-model="stateViewChart"
              class="px-3 rounded-xl py-1 border border-black"
            >
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
        <div :class="!stateViewChart && 'hidden'">
          <BulananViewChart />
        </div>
        <div :class="stateViewChart && 'hidden'">
          <MinugganViewChart />
        </div>
        <div :class="!stateViewChart ? 'opacity-0' : 'opacity-100'">
          <div
            id="map"
            style="positon: relative; height: 600px; width: 100%"
            class="mx-auto max-w-screen-lg w-full"
          >
            <l-map
              ref="map"
              v-model:zoom="zoom"
              :center="[-1.2, 113.816666]"
              :use-global-leaflet="false"
            >
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
import { ref } from "vue";
import BulananViewChart from "./partials/BulananViewChart.vue";
import MinugganViewChart from "./partials/MinugganViewChart.vue";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

const Peserta = ref(0);
const stateViewChart = ref(true);

export default {
  name: "HomeDashboard",
  components: {
    BulananViewChart,
    MinugganViewChart,
    LMap,
    LTileLayer,
  },
  data() {
    return {
      stateViewChart: new Date().getFullYear(), // Set default year to current year
      stateViewChart,
      zoom: 5,
    };
  },
  computed: {
    years() {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = 2024; i <= currentYear; i++) {
        years.push(i);
      }
      return years;
    },
  },
  methods: {
    changeYear(year) {
      this.stateViewChart = year;
      // Tambahkan logika di sini untuk menampilkan data sesuai dengan tahun yang dipilih
    },
  },
};
</script>
<style lang=""></style>
