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
        >Check In</span
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
      <form v-on:submit.prevent="submitHandling" method="post">
        <div class="w-4/5 md:w-2/4 grid grid-flow-row gap-5 mb-44 mt-10">
          <inputText
            v-model="npm"
            label="Nomor Peserta Magang"
            :required="true"
            v-on:focusout="GetUsers"
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
          <!-- <inputText
            v-model="divisikapal"
            label="Nama Divisi/Kapal"
            :required="true"
            :disabled="true"
          /> -->
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
              v-model:zoom="zoom"
              v-model:center="getLocation"
              :use-global-leaflet="false"
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
import { ref } from "vue";
import Time from "./partials/Time.vue";
import inputText from "./partials/inputText.vue";
import axios from "axios";
import { PesertaIndex } from "../../stores/Peserta.js";
import selectCheck from "./partials/selectCheck.vue";
import {
  LMap,
  LTileLayer,
  LIcon,
  LLayerGroup,
  LMarker,
} from "@vue-leaflet/vue-leaflet";
let latitude = ref(null);
let longitude = ref(null);

const namaRef = ref(false);
const magangTypeRef = ref(false);
const absensiTypeRef = ref(false);
const unitKerjaRef = ref(false);
const latitudeRef = ref(false);
const longitudeRef = ref(false);

const UnitKerjaIndex = [];

let center;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

export default {
  created() {
    this.getDataUnitKerja();
  },
  data() {
    return {
      computed: [],

      date: new Date(),
      day: null,
      month: null,
      npm: this.Npm,
      nama: "",
      magangType: "",
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
      // Pastikan semua data yang diperlukan diisi sebelum mengirim permintaan
      if (
        !this.nama ||
        !this.magangType ||
        !this.absensiType ||
        !this.unitKerja ||
        !this.latitude ||
        !this.longitude
      ) {
        alert("Harap lengkapi semua kolom sebelum melanjutkan.");
        return;
      }

      // Persiapkan data untuk dikirim ke backend
      const data = {
        user: {
          Npm: this.npm,
          // jenisAbsen: this.absensiType// Ganti dengan ID pengguna yang sesuai
        },
      };

      // Kirim permintaan ke backend menggunakan Axios
      axios
        .post("http://10.100.231.86:8080/api/check-in", data, {
          headers: {
            // 'Content-Type': 'application/json',
            // 'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJpY2FkLnNpbmFnYUBnbWFpbC5jb20iLCJpYXQiOjE3MTQ0NDMxODAsImV4cCI6MTcxNDUyOTU4MH0.A0Q9WMoZsRsazVVlJktDYOsHNH1BwEEyUWdahFOI3XL0_-SIcZF0tEBR_SugtMsp'
            // Ganti dengan token otorisasi yang sesuai
          },
        })
        .then((response) => {
          console.log("Respon:", response.data);
          // Lakukan tindakan sesuai dengan respons dari backend
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Terjadi kesalahan saat mengirim data ke backend.");
        });
    },

    GetUserss() {
      if (PesertaIndex.find((peserta) => peserta.Npm === this.npm)) {
        console.log(PesertaIndex.find((peserta) => peserta.Npm === this.npm));
        const DataMagang = PesertaIndex.find(
          (peserta) => peserta.Npm === this.npm
        );
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

    // async GetUsers() {
    //   try {
    //     // Lakukan permintaan untuk mendapatkan data peserta berdasarkan npm
    //     const response = await axios.get(`/api/check/in/${this.npm}`);
    //     const data = response.data;

    //     // Isikan nilai yang diperoleh dari respons ke dalam kolom yang bersangkutan
    //     this.nama = data.nama;
    //     this.magangType = data.magangType;
    //     this.unitKerja = data.unitKerja;
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     alert("Terjadi kesalahan saat mengambil data.");
    //   }

    //   await axios.get(`/api/check/in/${this.npm}`).then((e) => {
    //     this.nama = e.data.content[0].namalengkap;
    //     this.magangType = e.data.content[0].jenismagang;
    //     this.absensiType = "Check In";
    //     this.unitKerja = e.data.content[0].divisipenempatan;

    //     const dataPeserta = PesertaIndex.find(
    //       (peserta) => peserta.Npm === this.npm
    //     );
    //     if (dataPeserta) {
    //       // Isikan nilai ke kolom-kolom lainnya
    //       this.nama = dataPeserta.name;
    //       this.magangType = dataPeserta.type;
    //       this.absensiType = dataPeserta["Nama Divisi/Kapal"];
    //       this.unitKerja = dataPeserta["Unit Kerja Magang"];
    //     } else {
    //       // Pesan jika npm tidak ditemukan
    //       alert("Nomor Peserta Magang tidak ditemukan.");
    //       // Reset nilai kolom lainnya
    //       this.nama = "";
    //       this.magangType = "";
    //       this.absensiType = "";
    //       this.unitKerja = "";
    //     }

    //     // document.querySelector("#unitKerja-id").value = e.data.content[0].divisipenempatan
    //     // document.querySelector("#magangType-id").value = e.data.content[0].jenismagang
    //     // document.querySelector("#absensiType-id").value = "Check In"
    //   });
    // },

    async GetUsers() {
      try {
        console.log(this.npm);

        // Perform a request to get participant data based on npm
        // const response = await axios.get(
        //   `http://10.100.231.86:8080/api/check-in/${this.npm}`
        // );
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://10.100.231.86:8080/api/check-in/1238912",
          headers: {},
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });

        // const response = await axios.get(
        //   `http://10.100.231.86:8080/api/check-in/1238912`
        // );
        // const data = response.data;

        // // Check if data is present
        // if (data.content && data.content.length > 0) {
        //   // Extract data from the response
        //   const content = data.content[0];
        //   this.nama = content.namaLengkap;
        //   this.magangType = content.jenisMagang;
        //   this.unitKerja = content.unitKerja;
        // } else {
        //   console.log(this.npm);
        //   // Handle case where data is not found
        //   // alert("Nomor Peserta Magang tidak ditemukan.");
        //   // Reset values
        //   this.nama = "";
        //   this.magangType = "";
        //   this.unitKerja = "";
        // }
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
        alert("Terjadi kesalahan saat mengambil data.");
      }
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

  name: "ci",
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
