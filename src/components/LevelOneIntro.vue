<template>
    <div class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" :style="backgroundStyle">
        <!-- Overlay gradient for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>

        <!-- Content container -->
        <div class="relative z-10 w-full max-w-md px-6 py-8 text-center flex flex-col items-center justify-center">
            <!-- Text box -->
            <div class="bg-black bg-opacity-50 backdrop-blur-sm px-6 py-8 rounded-3xl shadow-xl w-full">
                <p class="text-white font-cinzel text-base md:text-lg leading-relaxed" style="line-height: 2;">
                    Kamu tiba di Pulau Arvena, tempat berbagai suku minat tinggal. Untuk lanjut, kamu harus memilih jalan hidup berdasarkan naluri dan ketertarikanmu.
                </p>
            </div>

            <!-- Navigation button -->
            <button
                @click="nextPage"
                class="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-cinzel font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75"
            >
                Lanjutkan
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LevelOneIntro',
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${require('@/assets/img/level1.png')})`,
            };
        },
    },
    methods: {
        nextPage() {
            this.$router.push('/before-question-one');
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
