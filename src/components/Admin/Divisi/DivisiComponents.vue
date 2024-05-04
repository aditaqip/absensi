<template>
  <div class="w-full overflow-x-auto">
    <div class="h-full">
      <div class="p-5 bg-slate-100 h-full">
        <div class="px-5 py-3 rounded-lg bg-white">
          <h1 class="text-xl py-2">Data Divisi</h1>
          <hr />
          <div class="flex md:justify-between md:items-center flex-col md:flex-row">
            <button
              class="bg-[#0D6EFD] text-white rounded pl-[10px] pt-[6px] pr-[35px] pb-[5px] flex gap-2 my-4"
              v-on:click="createState = !createState"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g id="octicon:plus-16">
                    <path
                      id="Vector"
                      d="M9.6875 2.5C9.93614 2.5 10.1746 2.59877 10.3504 2.77459C10.5262 2.9504 10.625 3.18886 10.625 3.4375V8.75H15.9375C16.1861 8.75 16.4246 8.84877 16.6004 9.02459C16.7762 9.2004 16.875 9.43886 16.875 9.6875C16.875 9.93614 16.7762 10.1746 16.6004 10.3504C16.4246 10.5262 16.1861 10.625 15.9375 10.625H10.625V15.9375C10.625 16.1861 10.5262 16.4246 10.3504 16.6004C10.1746 16.7762 9.93614 16.875 9.6875 16.875C9.43886 16.875 9.2004 16.7762 9.02459 16.6004C8.84877 16.4246 8.75 16.1861 8.75 15.9375V10.625H3.4375C3.18886 10.625 2.9504 10.5262 2.77459 10.3504C2.59877 10.1746 2.5 9.93614 2.5 9.6875C2.5 9.43886 2.59877 9.2004 2.77459 9.02459C2.9504 8.84877 3.18886 8.75 3.4375 8.75H8.75V3.4375C8.75 3.18886 8.84877 2.9504 9.02459 2.77459C9.2004 2.59877 9.43886 2.5 9.6875 2.5Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
              <span>Tambah Divisi</span>
            </button>
            <div>
              Show
              <input
                v-model="size"
                type="number"
                class="ml-3 pl-5 w-16 h-6 border border-black rounded-lg"
              />
            </div>
          </div>
          <table class="w-full">
            <thead class="w-3/5 font-thin">
              <tr class="border-b-[1px]">
                <th class="py-2">No</th>
                <th class="py-2">Nama Divisi</th>
                <th class="py-2 w-20"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(divisi, index) in divisiList" :key="index">
                <td class="text-center py-2">{{ index + 1 }}</td>
                <td class="text-center py-2">{{ divisi }}</td>
                <td class="flex py-2 justify-center items-center w-32 gap-2">
                  <button
                    class="text-gray-500 hover:text-gray-600 rounded-full px-2"
                    @click="deleteDivisi(index)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr v-if="divisiList.length === 0">
                <td colspan="3" class="text-center py-2">No Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div
    class="backdrop-brightness-50 w-full h-screen left-0 right-0 top-0 flex justify-center items-center"
    :class="createState ? 'absolute z-50' : 'hidden'"
    @click.self="createState = false"
  >
    <form
      @keydown.esc="createState = false"
      @submit.prevent="handleSubmit"
      class="bg-white border-[15px] border-white rounded-2xl w-4/5 md:w-2/5 md:p-14 p-3"
    >
      <div class="text-2xl font-medium text-center flex justify-center">
        <div class="border-b-2 border-black pb-3 px-9">Tambah Divisi</div>
      </div>
      <div class="mt-10 flex flex-col gap-9">
        <div>
          <div class="flex flex-col gap-3">
            <div class="font-semibold">
              <label for="nama-id">Nama Divisi</label>
            </div>
            <div>
              <input
                class="border w-full rounded border-black px-3 focus:outline-none py-3 pl-3"
                id="nama-id"
                name="nama"
                type="text"
                v-model="nama"
                placeholder="Masukkan Nama Divisi"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-3 mt-8">
          <button
            type="submit"
            class="border rounded-full bg-[#60A7DB] hover:bg-[#5696c4] text-white px-5 py-3"
          >
            Simpan
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      divisiList: ['Divisi Teknologi Informasi', 'Divisi SDM', 'Divisi Operasional'],
      createState: false,
      nama: '',
      size: 5
    };
  },
  methods: {
    handleSubmit() {
      if (this.nama.trim() === '') return;
      this.divisiList.push(this.nama.trim());
      this.nama = '';
      this.createState = false;
    },
    deleteDivisi(index) {
      this.divisiList.splice(index, 1);
    }
  }
};
</script>

<style lang=""></style>
