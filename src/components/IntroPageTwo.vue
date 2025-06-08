<template>
    <div class="relative min-h-screen bg-cover bg-center" :style="backgroundStyle">
        <!-- Overlay hitam dengan teks -->
        <div
        class="absolute left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-3 sm:px-5 md:px-8 py-4 sm:py-5 md:py-6 rounded-3xl max-w-3xl text-center mx-3 sm:mx-4"
        style="top: 3rem; width: calc(100% - 1.5rem);"
        >
            <p
                class="text-white font-[CinzelDecorative] text-sm sm:text-base md:text-lg leading-relaxed"
                style="line-height: 1.6;"
            >
                Untuk itu, kamu harus menyelesaikan 3 level pencarian: Dunia Minat, Arena Bakat, dan Cermin Kepribadian.
            </p>
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
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

.font-\[CinzelDecorative\] {
    font-family: 'Cinzel Decorative', cursive;
}
</style>
