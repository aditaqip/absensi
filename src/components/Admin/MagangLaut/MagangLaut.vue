<template>
  <div>
    <HeadNav title="Magang Laut" />

    <div class="grid grid-cols-3 md:gap-5 gap-3 p-7">
  <div class="bg-white rounded-xl h-32 md:h-40 col-span-3 md:col-span-1 flex flex-col items-center relative w-full md:w-auto">
    <!-- Garis Pemisah Tengah -->
    <div class="absolute inset-y-0 left-1/2 w-0.5 bg-gray-200" style="height: calc(100% - 36px); top: 36px;"></div>

    <!-- Bagian Atas -->
    <div class="mb-1 text-center text-2xl font-semibold">Nama Kapal</div>
    <div class="w-full border-b-2 border-gray mb-2"></div>

    <!-- Bagian Kiri -->
    <div class="flex items-center justify-between w-full px-4">
      <div class="w-1/2 text-center">Teknika</div>
      <div class="w-1/2 text-center">Nautika</div>
    </div>

    <!-- Bagian Kanan -->
    <div class="flex items-center justify-between w-full mt-2 px-4">
      <div class="w-1/2 text-center text-5xl">5</div>
      <div class="w-1/2 text-center text-5xl">5</div>
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
