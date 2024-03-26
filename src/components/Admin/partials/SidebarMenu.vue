<template>
  <nav
    class="w-2/12 md:w-1/12 h-screen duration-300 z-50"
    :class="show && 'absolute left-0 bg-white w-6/12 md:w-3/12'"
  >
    <div class="relative">
      <div class="duration-0 relative" :class="show ? 'w-full' : 'hidden'">
        <div
          class="inline-flex absolute right-0 top-[40%] cursor-pointer justify-end"
          v-on:click="closeSidebar"
        >
          <svg
            class="w-[40px] md:w-2/12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M31.5 10.5L24 18L31.5 25.5"
              stroke="#85B6FF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            class="ml-[-27px] w-[40px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            fill="none"
            v-on:click="toggleSidebar"
          >
            <path
              d="M31.5 10.5L24 18L31.5 25.5"
              stroke="#85B6FF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="./../../../assets/images/pt.png" class="p-12" alt="" />
      </div>
      <div
        class="flex justify-center cursor-pointer"
        v-on:click="show = true"
        :class="show && 'hidden mt-11'"
      >
        <div class="flex-col flex gap-1 p-3 items-center">
          <div class="w-8 h-1 bg-black"></div>
          <div class="w-8 h-1 bg-black"></div>
          <div class="w-8 h-1 bg-black"></div>
        </div>
      </div>
      <div class="overflow-hidden grid-cols-1 w-full place-items-center">
        <div class="relative py-6">
          <router-link
            to="/dashboard"
            class="duration-300 group grid gap-2 place-items-center"
            :class="
              show
                ? 'hover:bg-[#6690E6] grid-cols-2'
                : 'hover:border-r-8 hover:border-[#6690E6] hover:text-white  grid-cols-1'
            "
          >
            <div class="mx-auto inline-block w-fit" :class="show ? 'py-2' : ''">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 md:w-11 md:h-11"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  :class="
                    show
                      ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                      : 'fill-[#6690E6]'
                  "
                  d="M22.4786 8.70388C22.3506 8.58149 22.1804 8.51318 22.0034 8.51318C21.8263 8.51318 21.6561 8.58149 21.5281 8.70388L5.70703 23.8177C5.63984 23.882 5.58639 23.9592 5.5499 24.0447C5.51342 24.1303 5.49466 24.2223 5.49477 24.3153L5.49219 38.5001C5.49219 39.2295 5.78192 39.929 6.29764 40.4447C6.81337 40.9604 7.51284 41.2501 8.24219 41.2501H16.5008C16.8655 41.2501 17.2152 41.1053 17.4731 40.8474C17.7309 40.5895 17.8758 40.2398 17.8758 39.8751V28.1876C17.8758 28.0053 17.9482 27.8304 18.0771 27.7015C18.2061 27.5726 18.3809 27.5001 18.5633 27.5001H25.4383C25.6206 27.5001 25.7955 27.5726 25.9244 27.7015C26.0533 27.8304 26.1258 28.0053 26.1258 28.1876V39.8751C26.1258 40.2398 26.2706 40.5895 26.5285 40.8474C26.7864 41.1053 27.1361 41.2501 27.5008 41.2501H35.7559C36.4853 41.2501 37.1848 40.9604 37.7005 40.4447C38.2162 39.929 38.5059 39.2295 38.5059 38.5001V24.3153C38.506 24.2223 38.4873 24.1303 38.4508 24.0447C38.4143 23.9592 38.3609 23.882 38.2937 23.8177L22.4786 8.70388Z"
                  fill="#6690E6"
                />
                <path
                  :class="
                    show
                      ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                      : 'fill-[#6690E6]'
                  "
                  d="M42.1876 20.9816L35.7595 14.832V5.5C35.7595 5.13533 35.6146 4.78559 35.3568 4.52773C35.0989 4.26987 34.7492 4.125 34.3845 4.125H30.2595C29.8948 4.125 29.5451 4.26987 29.2872 4.52773C29.0294 4.78559 28.8845 5.13533 28.8845 5.5V8.25L23.907 3.49078C23.4412 3.01984 22.7486 2.75 22 2.75C21.2541 2.75 20.5632 3.01984 20.0974 3.49164L1.81847 20.9799C1.28394 21.4955 1.21691 22.3438 1.70331 22.9023C1.82546 23.0433 1.97501 23.158 2.14288 23.2394C2.31075 23.3207 2.49342 23.3671 2.67977 23.3756C2.86612 23.3841 3.05226 23.3546 3.22685 23.2889C3.40144 23.2232 3.56084 23.1227 3.69535 22.9934L21.5274 5.95375C21.6553 5.83136 21.8256 5.76305 22.0026 5.76305C22.1797 5.76305 22.3499 5.83136 22.4778 5.95375L40.3116 22.9934C40.5743 23.2454 40.9262 23.3829 41.2901 23.3758C41.654 23.3687 42.0002 23.2176 42.2529 22.9556C42.7806 22.4091 42.7368 21.5067 42.1876 20.9816Z"
                  fill="#6690E6"
                />
              </svg>
            </div>
            <div
              class="inline-block absolute duration-500 top-[40%] text-sm md:text-base"
              :class="
                show ? 'left-[40%] group-hover:text-white' : 'left-[150%]'
              "
            >
              Dashboard
            </div>
          </router-link>
        </div>

        <div class="relative py-6 cursor-pointer">
          <div
            class="duration-300 group grid gap-2 place-items-center"
            :class="{
              'hover:bg-[#6690E6] grid-cols-2': show,
              'hover:border-r-8 hover:border-[#6690E6] grid-cols-1': !show,
            }"
            v-on:click="toggleDataManagementMenu"
          >
            <div class="mx-auto inline-block w-fit" :class="show ? 'py-2' : ''">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 md:w-11 md:h-11"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  :class="
                    show
                      ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                      : 'fill-[#6690E6]'
                  "
                  d="M23.375 40.375V19.125H8.5V40.375H23.375ZM23.375 14.875V8.5C23.375 7.93641 23.5989 7.39591 23.9974 6.9974C24.3959 6.59888 24.9364 6.375 25.5 6.375H44.625C45.1886 6.375 45.7291 6.59888 46.1276 6.9974C46.5261 7.39591 46.75 7.93641 46.75 8.5V42.5C46.75 43.0636 46.5261 43.6041 46.1276 44.0026C45.7291 44.4011 45.1886 44.625 44.625 44.625H6.375C5.81141 44.625 5.27091 44.4011 4.8724 44.0026C4.47388 43.6041 4.25 43.0636 4.25 42.5V17C4.25 16.4364 4.47388 15.8959 4.8724 15.4974C5.27091 15.0989 5.81141 14.875 6.375 14.875H23.375ZM27.625 10.625V40.375H42.5V10.625H27.625ZM10.625 34H21.25V38.25H10.625V34ZM29.75 34H40.375V38.25H29.75V34ZM29.75 27.625H40.375V31.875H29.75V27.625ZM29.75 21.25H40.375V25.5H29.75V21.25ZM10.625 27.625H21.25V31.875H10.625V27.625Z"
                  fill="none"
                />
              </svg>
            </div>

            <div
              class="inline-block absolute duration-500 text-sm md:text-base"
              :class="
                show
                  ? 'left-[40%] group-hover:text-white'
                  : 'left-[150%] hidden'
              "
            >
              Kelola Data
            </div>
          </div>
          <div
            class="grid place-items-end mt-8 duration-500"
            :class="{
              hidden: !showDataManagementMenu,
              'translate-y-0': show || showDataManagementMenu,
            }"
          >
            <router-link
              to="/kelola-magang-darat"
              class="w-full p-4 hover:bg-[#537ABC] hover:text-white"
            >
              <div class="w-3/5 ml-auto">Magang Darat</div>
            </router-link>
            <router-link
              to="/kelola-magang-laut"
              class="w-full p-4 hover:bg-[#537ABC] hover:text-white"
            >
              <div class="w-3/5 ml-auto">Magang Laut</div>
            </router-link>
          </div>
        </div>

        <div class="relative py-6">
          <router-link
            to="/kelola-unit"
            class="duration-300 group grid gap-2 place-items-center"
            :class="
              show
                ? 'hover:bg-[#6690E6] grid-cols-2'
                : 'hover:border-r-8 hover:border-[#6690E6] hover:text-white  grid-cols-1'
            "
          >
            <div class="mx-auto inline-block w-fit" :class="show ? 'py-2' : ''">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 md:w-11 md:h-11"
                viewBox="0 0 47 47"
                fill="none"
              >
                <path
                  :class="
                    show
                      ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                      : 'fill-[#6690E6]'
                  "
                  d="M41.125 44.0625V11.75H32.3125V2.9375H5.875V44.0625H0V47H20.5625V38.1875H26.4375V47H47V44.0625H41.125ZM17.625 32.3125H11.75V26.4375H17.625V32.3125ZM17.625 23.5H11.75V17.625H17.625V23.5ZM17.625 14.6875H11.75V8.8125H17.625V14.6875ZM26.4375 32.3125H20.5625V26.4375H26.4375V32.3125ZM26.4375 23.5H20.5625V17.625H26.4375V23.5ZM26.4375 14.6875H20.5625V8.8125H26.4375V14.6875ZM38.1875 32.3125H32.3125V26.4375H38.1875V32.3125ZM38.1875 23.5H32.3125V17.625H38.1875V23.5Z"
                  fill="none"
                />
              </svg>
            </div>
            <div
              class="inline-block absolute duration-500 text-sm md:text-base"
              :class="
                show ? 'left-[40%] group-hover:text-white' : 'left-[150%]'
              "
            >
              Kelola Unit
            </div>
          </router-link>
        </div>
        <div class="relative py-6">
          <router-link
            to="/report"
            class="duration-300 group grid gap-2 place-items-center"
            :class="
              show
                ? 'hover:bg-[#6690E6] grid-cols-2'
                : 'hover:border-r-8 hover:border-[#6690E6] hover:text-white  grid-cols-1'
            "
          >
            <div class="mx-auto inline-block w-fit" :class="show ? 'py-2' : ''">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 md:w-11 md:h-11"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  :class="
                    show
                      ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                      : 'fill-[#6690E6]'
                  "
                  d="M18.75 33.75H33.75V37.5H18.75V33.75ZM18.75 24.375H41.25V28.125H18.75V24.375ZM18.75 43.125H28.125V46.875H18.75V43.125Z"
                  fill="none"
                />
                <path
                  :class="
                    show
                      ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                      : 'fill-[#6690E6]'
                  "
                  d="M46.875 9.375H41.25V7.5C41.25 6.50544 40.8549 5.55161 40.1516 4.84835C39.4484 4.14509 38.4946 3.75 37.5 3.75H22.5C21.5054 3.75 20.5516 4.14509 19.8484 4.84835C19.1451 5.55161 18.75 6.50544 18.75 7.5V9.375H13.125C12.1304 9.375 11.1766 9.77009 10.4733 10.4733C9.77009 11.1766 9.375 12.1304 9.375 13.125V52.5C9.375 53.4946 9.77009 54.4484 10.4733 55.1516C11.1766 55.8549 12.1304 56.25 13.125 56.25H46.875C47.8696 56.25 48.8234 55.8549 49.5266 55.1516C50.2299 54.4484 50.625 53.4946 50.625 52.5V13.125C50.625 12.1304 50.2299 11.1766 49.5266 10.4733C48.8234 9.77009 47.8696 9.375 46.875 9.375ZM22.5 7.5H37.5V15H22.5V7.5ZM46.875 52.5H13.125V13.125H18.75V18.75H41.25V13.125H46.875V52.5Z"
                  fill="none"
                />
              </svg>
            </div>
            <div
              class="inline-block absolute duration-500 text-sm md:text-base"
              :class="
                show ? 'left-[40%] group-hover:text-white' : 'left-[150%]'
              "
            >
              Reporting
            </div>
          </router-link>
        </div>
      </div>
      <div class="relative py-6 cursor-pointer">
        <div
          class="duration-300 group grid gap-2 place-items-center"
          :class="{
            'hover:bg-[#6690E6] grid-cols-2': show,
            'hover:border-r-8 hover:border-[#6690E6] grid-cols-1': !show,
          }"
          v-on:click="toggleAdminMenu"
        >
          <div class="mx-auto inline-block w-fit" :class="show ? 'py-2' : ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 md:w-11 md:h-11"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                :class="
                  show
                    ? 'duration-500 group-hover:fill-white fill-[#6690E6]'
                    : 'fill-[#6690E6]'
                "
                d="M39.752,38.894a1.5,1.5,0,0,0-.831.67l-2.162,3.709a1.5,1.5,0,0,0-.174,1.052A6.248,6.248,0,0,0,37.9,47.147l0,.484A5.816,5.816,0,0,0,36.642,50.1H8.333a1,1,0,0,1-.99-1.147,19.8,19.8,0,0,1,5.2-11.059c3.381-3.362,8.21-5,14.366-4.892,6.523-.11,11.517,1.745,14.919,5.54A7.369,7.369,0,0,0,39.752,38.894ZM56.3,49.863a4.371,4.371,0,0,1,.34.76l-1.53,2.62a3.96,3.96,0,0,1-.819.08,1.5,1.5,0,0,0-1.641-.1l-1.78,1.02a1.5,1.5,0,0,0-.75,1.46,3.526,3.526,0,0,1-.49.67l-3.029-.01a4.343,4.343,0,0,1-.481-.68,1.5,1.5,0,0,0-.73-1.47l-1.78-1.03a1.5,1.5,0,0,0-1.639.08,3.925,3.925,0,0,1-.821-.08l-1.51-2.63a4.29,4.29,0,0,1,.35-.76,1.481,1.481,0,0,0,.9-1.37l.01-2.05a1.479,1.479,0,0,0-.89-1.38,4.292,4.292,0,0,1-.34-.75l1.53-2.62a3.378,3.378,0,0,1,.82-.08,1.5,1.5,0,0,0,1.641.1l1.789-1.02a1.506,1.506,0,0,0,.74-1.46,3.937,3.937,0,0,1,.49-.68l3.03.02a3.781,3.781,0,0,1,.48.67,1.5,1.5,0,0,0,.73,1.47l1.78,1.04a1.5,1.5,0,0,0,1.64-.09,3.492,3.492,0,0,1,.821.09l1.509,2.63a3.837,3.837,0,0,1-.35.75,1.491,1.491,0,0,0-.9,1.37l-.009,2.06A1.464,1.464,0,0,0,56.3,49.863ZM49.508,45.1a2.691,2.691,0,1,0,.971,3.68A2.695,2.695,0,0,0,49.508,45.1ZM26.885,28.953A10.663,10.663,0,1,0,16.221,18.29,10.675,10.675,0,0,0,26.885,28.953Z"
                fill="none"
              />
            </svg>
          </div>

          <div
            class="inline-block absolute duration-500 text-sm md:text-base"
            :class="
              show ? 'left-[40%] group-hover:text-white' : 'left-[150%] hidden'
            "
          >
            Admin
          </div>
        </div>
        <div
          class="grid place-items-end mt-8 duration-500"
          :class="{
            hidden: !showAdminMenu,
            'translate-y-0': show || showAdminMenu,
          }"
        >
          <router-link
            to="/user-acces-management"
            class="w-full p-4 hover:bg-[#537ABC] hover:text-white"
          >
            <div class="w-3/5 ml-auto">User Acces Management</div>
          </router-link>
          <router-link
          to="/activity-log" 
            class="w-full p-4 hover:bg-[#537ABC] hover:text-white"
          >
            <div class="w-3/5 ml-auto">Logging</div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      // Variabel untuk mengontrol tampilan bagian Kelola Data
      showDataManagementMenu: false,
      // Variabel untuk mengontrol tampilan bagian Admin
      showAdminMenu: false,
    };
  },
  methods: {
    // Method untuk menampilkan/menyembunyikan bagian Kelola Data
    toggleDataManagementMenu() {
      this.showDataManagementMenu = !this.showDataManagementMenu;
    },
    // Method untuk menampilkan/menyembunyikan bagian Admin
    toggleAdminMenu() {
      this.showAdminMenu = !this.showAdminMenu;
    },
  },
  name: "SidebarMenu",
  setup() {
    const show = ref(false);
    const showMaster = ref({
      showData: false,
    });

    const toggleSidebar = () => {
      show.value = !show.value;
      showMaster.showData = false;
    };

    const closeSidebar = () => {
      show.value = false;
      showMaster.showData = false;
    };

    return {
      show,
      showMaster,
      toggleSidebar,
    };
  },
};
</script>

<style>
.router-link-active {
  border-right-width: 8px;
  --tw-border-opacity: 1;
  border-color: rgb(102 144 230 / 1);
}
</style>
