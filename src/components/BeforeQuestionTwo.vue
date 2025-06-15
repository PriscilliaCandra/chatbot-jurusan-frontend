<template>
    <div class="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 via-indigo-100 to-purple-100 p-4">
        <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <h3 class="text-xl md:text-3xl font-bold mb-8 text-center font-cinzel" style="color: #63739A; line-height: 1.4;">
                Kamu Harus Menjawab 12 Pertanyaan Untuk Mengetahui Bakatmu
            </h3>

            <button
                @click="startQuestion"
                class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-cinzel font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75"
            >
                MULAI
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BeforeQuestionTwo',
    methods: {
        startQuestion() {
            const token = localStorage.getItem('token');
            if (!token) {
                this.$router.push('/');
                return;
            }
            this.$router.push('/question-level-two/1');
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
