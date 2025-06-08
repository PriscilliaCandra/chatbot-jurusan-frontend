<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 via-indigo-100 to-purple-100 p-2 sm:p-4 text-center font-cinzel">
        <div class="bg-white rounded-2xl shadow-xl px-3 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12 w-[95%] sm:w-[90%] md:w-full max-w-3xl flex flex-col items-center">
            <!-- Logo -->
            <img
                src="../assets/img/logo.jpg"
                alt="Talentia Quest Logo"
                class="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-5 md:mb-6 rounded-full shadow-md"
            />

            <!-- Judul -->
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-5 md:mb-6 drop-shadow-md" style="color: #63739A">
                TALENTIA QUEST
            </h1>

            <!-- Tombol mulai -->
            <button
            @click="startQuest"
            class="text-white font-bold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-full text-lg sm:text-xl md:text-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75 w-[90%] sm:w-[80%] md:w-auto"
            style="background-color: #A27AED"
            >
                MULAI
            </button>
        </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        startQuest() {
          this.$router.push('/intro-page-one');
        },
    },
};
</script>

<!-- Tambahkan import font di style -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap');

.font-cinzel {
    font-family: 'Cinzel Decorative', cursive;
}
</style>
