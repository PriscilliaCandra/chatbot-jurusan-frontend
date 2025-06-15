<template>
  <div class="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center" :style="backgroundStyle">
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
    
    <div class="relative z-10 w-full max-w-md px-6 py-8 text-center flex flex-col items-center justify-center">
      <div class="bg-black bg-opacity-50 backdrop-blur-sm px-6 py-8 rounded-3xl shadow-xl w-full">
        <h1 class="text-white font-cinzel text-4xl md:text-5xl font-bold mb-4">
          LEVEL 2
        </h1>
        <h1 class="text-white font-cinzel text-4xl md:text-5xl font-bold">
          DUNIA BAKAT
        </h1>
      </div>
    </div>

    <button
      @click="nextPage"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-cinzel font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75 w-[90%] max-w-md"
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
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');

.font-cinzel {
    font-family: 'Cinzel Decorative', cursive;
}

/* Add smooth animation for the button */
button {
    background-size: 200% auto;
    animation: gradient 3s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
