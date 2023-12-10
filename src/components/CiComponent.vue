<template>
    <main class="overflow-x-hidden overflow-y-auto max-w-lg mx-auto md:max-w-lg h-screen bg-check-in">
        <logos />
        <imageSlider />
        <SlidingImg />
        <Footer />
    </main>
</template>

<script>
import logos from './partials/logos.vue';
import imageSlider from './partials/imageSlider.vue';
import SlidingImg from './partials/SlidingImg.vue';
import Footer from './partials/Footer.vue';

export default {
    name: 'testingcomp',
    components: {
    logos,
    imageSlider,
    SlidingImg,
    Footer
}
}

</script>

<style scoped>

</style>