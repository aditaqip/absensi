<template>
  <main
    class="overflow-hidden h-screen overflow-y-auto background-iamge-custom-cico"
  >
    <div class="relative flex flex-wrap justify-center items-center">
      <svg
        class="w-full h-full mt-[-40px] md:mt-[-20px] xl:mt-[-230px]"
        viewBox="0 0 360 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="179.5" cy="23" rx="197.5" ry="62" fill="#D9D9D9" />
      </svg>
      <span class="absolute top-[50%] z-10 font-bold leading-5 font-color"
        >Check Out</span
      >
    </div>
    <div class="w-full text-white mt-6 text-center">
      <div>
        <span>{{
          getDay(date.getDay()) +
          ", " +
          date.getDate() +
          " " +
          GetMonth(date.getMonth()) +
          " " +
          date.getFullYear()
        }}</span>
      </div>
    </div>
    <div class="flex justify-center flex-col items-center">
      <Time />
      <form
        v-on:submit.prevent="submitHandling"
        method="post"
        class="flex justify-center"
      >
        <div
          class="w-4/5 md:w-3/4 grid grid-flow-row gap-5 mb-44 mt-10 justify-items-center"
        >
          <inputText
            v-model="npm"
            label="Nomor Peserta Magang"
            :required="true"
            v-on:focusout="GetUserss()"
          />
          <inputText
            v-model="nama"
            label="Nama Peserta Magang"
            :required="true"
            :disabled="true"
          />
          <inputText
            v-model="magangType"
            label="Jenis Program Magang"
            :required="true"
            :disabled="true"
          />
          <inputText
            v-model="divisikapal"
            label="Nama Divisi/Kapal"
            :required="true"
            :disabled="true"
          />
          <inputText
            v-model="unitKerja"
            label="Unit Kerja Magang"
            :required="true"
            :disabled="true"
          />
          <selectCheck
            v-model="jenisAbsensi"
            label="Jenis Absensi"
            :required="true"
            :data="computed"
          />

          <div
            v-if="jenisAbsensi === 'WFO'"
            style="position: relative; height: 600px; width: 100%"
            :val="latitude"
          >
            <l-map
              ref="map"
              :zoom="zoom"
              :center="center"
              :use-global-leaflet="false"
              style="height: 400px; width: 100%"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              ></l-tile-layer>
            </l-map>
          </div>

          <div class="flex justify-center">
            <button
              class="px-5 py-3 outline outline-white rounded-3xl text-white bg-transparent mt-8"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <!-- <Forms /> -->
    </div>
  </main>
</template>

<script>
import Time from "./partials/Time.vue";
import inputText from "./partials/inputText.vue";
import selectCheck from "./partials/selectCheck.vue";
import { PesertaIndex } from "../../stores/Peserta.js";
import axios from "axios";
import {
  LMap,
  LTileLayer,
  LIcon,
  LLayerGroup,
  LMarker,
} from "@vue-leaflet/vue-leaflet";

const latitude = "";
const longitude = "";
const UnitKerjaIndex = "";
let center;

export default {
  data() {
    return {
      zoom: 10,
      center: [-6.1845293,106.872567], // Atur ke koordinat yang sesuai dengan lokasi yang ingin ditampilkan
    };
  },
  mounted() {
    this.getLocation();
  },
  created() {
    this.getDataUnitKerja();
  },
  data() {
    return {
      date: new Date(),
      day: null,
      month: null,
      npm: null,
      nama: null,
      magangType: null,
      absensiType: null,
      unitKerja: null,
      time: "",
      zoom: 10,
      latitude,
      longitude,
      center,
      UnitKerjaIndex,
      jenisAbsensi: "",
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.center = [latitude, longitude];
          },
          (error) => {
            console.error("Error getting current position:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },

    jenisAbsensiOptions() {
      // Jika magangType berisikan 'Magang Darat', opsi yang tersedia adalah 'WFA' dan 'WFO'
      if (this.magangType == "Magang Darat") {
        this.computed = [
          { label: "WFO", value: "WFO" },
          { label: "WFA", value: "WFA" },
        ];
      }
      // Jika magangType berisikan 'Magang Laut', opsi yang tersedia hanya 'WFA'
      else if (this.magangType == "Magang Laut") {
        this.computed = [{ label: "WFA", value: "WFA" }];
      }
      // Default jika tidak ada magangType yang sesuai
      else {
        this.computed = [];
      }
    },

    getDay(i) {
      var day = "Senin";
      if (i == 0) {
        day = "Minggu";
      }
      if (i == 1) {
        day = "Senin";
      }
      if (i == 2) {
        day = "Selasa";
      }
      if (i == 3) {
        day == "Rabu";
      }
      if (i == 4) {
        day == "Kamis";
      }
      if (i == 5) {
        day == "Jumat";
      }
      if (i == 6) {
        day == "Sabtu";
      }
      return day;
    },
    async getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      return [latitude, longitude];
    },
    GetMonth(i) {
      var month;
      month = [
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
      ];
      return month[i];
    },
    submitHandling() {
      if (this.nama == "") this.nama.value = true;
      if (this.magangType == "") this.magangType.value = true;
      if (this.absensiType == "") this.absensiType.value = true;
      if (this.unitKerja == "") this.unitKerja.value = true;
      if (this.latitude == "") this.latitude.value = true;
      if (this.longitude == "") this.longitude.value = true;

      // if(namaRef) return false
      // if(magangTypeRef) return false
      // if(absensiTypeRef) return false
      // if(unitKerjaRef) return false
      // if(latitudeRef) return false
      // if(longitudeRef) return false
      let PARAM = [
        { key: "npm", value: this.npm },
        { key: "divisi", value: this.unitKerja },
        { key: "kapal", value: this.kapal },
        { key: "location", value: [this.latitude, this.longitude] },
        { key: "typemagang", value: this.magangType },
      ];
      let url = "?";
      PARAM.forEach((element) => {
        url += element.key + "=" + element.value + "&";
      });

      axios.post("/checkin" + url).then((e) => {
        console.log(e);
      });
    },

    GetUserss() {
      if (PesertaIndex.find((peserta) => peserta.Npm === this.npm)) {
        console.log(PesertaIndex.find((peserta) => peserta.Npm === this.npm));
        const DataMagang = PesertaIndex.find(
          (peserta) => peserta.Npm === this.npm
        );
        alert("Anda Belum Check-in.");
        this.nama = DataMagang.name;
        this.magangType = DataMagang.JenisMagang;
        this.divisikapal = DataMagang.namaDivpal;
        this.unitKerja = DataMagang.unitKerja;
        this.jenisAbsensiOptions();
      } else {
        alert("Nomor Peserta Magang tidak ditemukan.");
        console.log("gagal");
      }
    },

    async GetUsers() {
      await axios.get("/search_dataByNpm?npm=" + this.npm).then((e) => {
        this.nama = e.data.content[0].namalengkap;
        this.magangType = e.data.content[0].jenismagang;
        this.absensiType = "Check Out";
        this.unitKerja = e.data.content[0].divisipenempatan;

        // document.querySelector("#unitKerja-id").value = e.data.content[0].divisipenempatan
        // document.querySelector("#magangType-id").value = e.data.content[0].jenismagang
        // document.querySelector("#absensiType-id").value = "Check In"
      });
    },
    getDivisi(divisi, value) {
      length = divisi.length;
      for (let index = 0; index < divisi.length; index++) {
        if (divisi[index]._value == "") {
          return divisi[index];
        }
      }
    },
    getDataUnitKerja(page = 0) {
      axios
        .get("/unitkerja?size=999&page=" + page)
        .then((e) => {
          let data = [];
          console.log(e.data.content);
          e.data.content.forEach((element) => {
            data.push({ label: element.namadivisi, value: element.namadivisi });
          });
          this.UnitKerjaIndex = data;
        })
        .catch((e) => console.log(e));
    },
  },
  name: "co",
  components: {
    Time,
    inputText,
    selectCheck,
    LMap,
    LTileLayer,
  },
};
</script>

<style scoped>
.background-iamge-custom-cico {
  background: url("./../../assets/images/image-18.png"), rgba(38, 62, 103, 1);
  background-repeat: repeat;
  background-size: 100%;
}
.font-color {
  color: rgba(38, 62, 103, 1);
}
</style>
