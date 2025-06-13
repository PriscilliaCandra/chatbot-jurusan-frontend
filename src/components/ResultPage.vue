<template>
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div v-if="loading" class="text-center">
            <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p class="mt-4 font-cinzel text-xl text-gray-600">Memuat hasil...</p>
        </div>

        <div v-else-if="error" class="text-center">
            <p class="text-red-500 text-xl">{{ error }}</p>
            <button @click="fetchResult" class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Coba Lagi
            </button>
        </div>

        <div v-else class="max-w-4xl mx-auto">
            <!-- Header Section -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 mb-4 font-cinzel">Hasil Analisis Kepribadian</h1>
                <p class="text-xl text-gray-600">Temukan potensi dan jurusan yang sesuai dengan kepribadianmu</p>
            </div>

            <!-- Personality Type Section -->
            <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 font-cinzel">Tipe Kepribadian</h2>
                <div class="bg-blue-50 rounded-xl p-6">
                    <p class="text-3xl font-bold text-blue-600 text-center">{{ result.personality_type }}</p>
                </div>
            </div>

            <!-- Recommended Majors Section -->
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 font-cinzel">Jurusan yang Direkomendasikan</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="(major, index) in result.recommended_majors" 
                         :key="index"
                         class="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-200">
                        <p class="text-lg font-medium text-gray-800">{{ major }}</p>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-12 text-center space-x-4">
                <button @click="restartTest" 
                        class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-200">
                    Tes Ulang
                </button>
                <button @click="goToChat" 
                        class="bg-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition duration-200">
                    Menuju Chatbot
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ResultPage',
    data() {
        return {
            loading: true,
            error: null,
            result: {
                personality_type: '',
                recommended_majors: []
            }
        };
    },
    created() {
        this.fetchResult();
    },
    methods: {
        async fetchResult() {
            this.loading = true;
            this.error = null;
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/api/game/result', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                this.result = response.data;
            } catch (error) {
                console.error('Error fetching result:', error);
                this.error = 'Gagal memuat hasil. Silakan coba lagi.';
            } finally {
                this.loading = false;
            }
        },
        restartTest() {
            this.$router.push('/home');
        },
        goToChat() {
            this.$router.push('/chatbot');
        }
    }
};
</script>

<style scoped>
.font-cinzel {
    font-family: 'Cinzel Decorative', cursive;
}

</style> 