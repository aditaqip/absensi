<!-- <template>
    <div class="h-2/5">
        <swiper
        :modules="modules"
        :slidesPerView="1.5"
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }"
        :loop="true"
        
      >
        <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
        <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
        <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
        <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
        <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
        <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
      </swiper>
    </div>
</template>

<script>
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default {
  name: "ImageSilder",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
        onSwiper,
        onSlideChange,
        modules: [Pagination]
        };  
    },
};
</script>

<style scoped>

</style> -->


<template>
  <div class="">
    <swiper
      :modules="modules"
      :slides-per-view="1.4"
      :space-between="30"
      :centeredSlides="true"
      :loop="true"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    
    >
      <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
      <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/kapal2.png" alt=""></swiper-slide>
      <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/kapal3.png" alt=""></swiper-slide>
      <swiper-slide><img class="w-full rounded-xl" src="./../../assets/images/slide-1.png" alt=""></swiper-slide>
    </swiper>
  </div>
</template>
<script>
  // import Swiper core and required modules
  import { Pagination } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination],
      };
    },
  };
</script>