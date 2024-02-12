<template>
  <div>
    <HeadNav title="Magang Laut" />

    <div class="grid grid-cols-3 md:gap-5 gap-3 p-7 ">
      
      <div
        class="bg-white rounded-xl h-32 md:h-40 col-span-3 md:col-span-1 flex flex-col items-center relative w-80"
      >
        <!-- Garis Pemisah Tengah -->
        <div
          class="absolute inset-y-0 left-1/2 w-0.5 bg-gray-200"
          style="height: calc(100% - 36px); top: 36px"
        ></div>

        <!-- Bagian Atas -->
        <div class="mb-1 text-center text-2xl">Nama Kapal</div>
        <div class="w-80 border-b-2 border-gray mb-2"></div>

        <!-- Bagian Kiri -->
        <div class="flex items-center justify-between w-60">
            <div>Teknika</div>
          <div>Nautika</div>
        </div>

        <!-- Bagian Kanan -->
        <div class="flex items-center justify-between w-40">
          <div
            class="mr-2 text-5xl"
            style="transform: translateY(10px) translateX(-25px)"
          >
            5
          </div>
          <div
            class="text-5xl"
            style="transform: translateY(10px) translateX(25px)"
          >
            5
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import HeadNav from "../partials/HeadNav.vue";

export default {
  components: {
    HeadNav,
  },
  name: "MagangLaut",
};
</script>
<style></style>
