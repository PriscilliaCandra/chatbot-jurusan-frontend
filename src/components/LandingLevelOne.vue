<template>
  <div class="relative min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <div
      class="absolute left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-3 sm:px-4 md:px-5 py-8 sm:py-12 md:py-16 lg:py-20 rounded-3xl w-[95%] sm:w-[90%] md:w-full max-w-4xl text-center mx-3 sm:mx-4"
      style="top: 3rem;"
    >
        <h1
            class="text-white font-[CinzelDecorative] leading-relaxed"
            style="line-height: 1.6; font-size: 1.75rem; font-weight: 700;"
            >
            LEVEL 1
        </h1>
        <h1
            class="text-white font-[CinzelDecorative] leading-relaxed"
            style="line-height: 1.6; font-size: 1.75rem; font-weight: 700;"
            >
            DUNIA MINAT
        </h1>
    </div>

    <button
      @click="nextPage"
      class="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white font-[CinzelDecorative] font-bold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 rounded-full text-base sm:text-lg md:text-xl shadow-md hover:scale-105 transition w-[90%] sm:w-[80%] md:w-auto"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
    name: 'LandingLevelOne',
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${require('@/assets/img/landing1.png')})`,
            };
        },
    },
    methods: {
        nextPage() {
            this.$router.push('/level-one-intro');
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

.font-\[CinzelDecorative\] {
    font-family: 'Cinzel Decorative', cursive;
}
</style>
