<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 via-indigo-100 to-purple-100 p-4 font-cinzel">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
        <div class="relative w-32 h-32 mb-6">
            <img
                src="../assets/img/logo.jpg"
                alt="Talentia Quest Logo"
                class="w-full h-full object-cover rounded-full shadow-lg"
            />
            <div class="absolute inset-0 rounded-full border-4 border-purple-200 opacity-50"></div>
        </div>

        <h1 class="text-3xl font-extrabold mb-8 text-center" style="color: #63739A">
            TALENTIA QUEST
        </h1>

        <p class="text-gray-600 text-center mb-8 px-4">
            Temukan jurusan yang sesuai dengan kepribadian dan bakatmu
        </p>

        <button
            @click="startQuest"
            class="w-full max-w-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75"
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');

.font-cinzel {
    font-family: 'Cinzel Decorative', cursive;
}

/* Add smooth animation for the logo */
img {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}

/* Add gradient animation to the button */
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
