<template>
    <div class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" :style="backgroundStyle">
        <!-- Overlay gradient for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>

        <!-- Content container -->
        <div class="relative min-h-screen w-full flex flex-col items-center justify-between p-4">
            <!-- Text box -->
            <div class="w-full max-w-2xl mt-16 bg-black bg-opacity-50 p-6 rounded-2xl shadow-xl">
                <p class="text-white font-cinzel font-bold text-lg leading-relaxed text-center">
                    Untuk itu, kamu harus menyelesaikan 3 level pencarian: Dunia Minat, Arena Bakat, dan Cermin Kepribadian.
                </p>
            </div>

            <!-- Navigation buttons -->
            <div class="w-full max-w-md mb-8 flex flex-col items-center gap-4">
                <button
                    @click="nextPage"
                    class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-cinzel font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75"
                >
                    Lanjutkan
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroPageTwo',
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${require('@/assets/img/intro2.jpg')})`,
            };
        },
    },
    methods: {
        nextPage() {
            this.$router.push('/landing-level-one');
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
