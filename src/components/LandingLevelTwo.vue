<template>
  <div class="relative min-h-screen bg-cover bg-center flex items-center justify-center" :style="backgroundStyle">
    <div
      class="bg-black bg-opacity-50 px-10 py-10 rounded-3xl text-center mx-auto"
    >
      <h1
        class="text-white font-[CinzelDecorative] leading-relaxed"
        style="font-size: 3rem; font-weight: 700; margin-bottom: 20px;"
      >
        LEVEL 2
      </h1>
      <h1
        class="text-white font-[CinzelDecorative] leading-relaxed"
        style="font-size: 3rem; font-weight: 700;"
      >
        DUNIA BAKAT
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
    name: 'LandingLevelTwo',
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${require('@/assets/img/landing2.png')})`,
            };
        },
    },
    methods: {
        nextPage() {
            this.$router.push('/level-two-intro');
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
