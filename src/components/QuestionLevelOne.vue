<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div v-if="loading" class="text-center text-gray-700 text-2xl font-semibold">
            <!-- Tampilan loading analisis -->
            <img src="https://placehold.co/150x150/E0F7FA/000000?text=ANALYZING" alt="Analyzing" class="mx-auto mb-4 rounded-full shadow-md animate-pulse" />
            <p>TERIMA KASIH SUDAH MENJAWAB SEMUA PERTANYAAN! AKU SEDANG MENGANALISIS...</p>
        </div>
  
        <div v-else-if="questionText" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
                LEVEL 1 - DUNIA MINAT
            </h2>
    
            <p class="text-lg text-gray-700 mb-8 text-center">{{ questionText }}</p>
    
            <div class="space-y-4">
                <button
                    v-for="(option, index) in options"
                    :key="index"
                    @click="selectOption(option.value)"
                    :class="{
                    'bg-blue-100 border-blue-500 text-blue-800': selectedAnswer === option.value,
                    'bg-gray-50 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400': selectedAnswer !== option.value,
                    }"
                    class="block w-full text-left py-4 px-6 border rounded-lg font-medium shadow-sm transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    {{ option.text }}
                </button>
            </div>
    
            <div class="flex justify-between items-center mt-8">
                <button
                    @click="prevQuestion"
                    :disabled="currentQuestionNumber === 1"
                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                >
                    Previous
                </button>
                <span class="text-gray-600 text-sm">Question {{ currentQuestionNumber }} of 12</span>
                <button
                    @click="nextQuestion"
                    :disabled="!selectedAnswer"
                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                >
                    Next
                </button>
            </div>
        </div>
    
        <p v-else class="text-red-500 text-xl">Terjadi kesalahan memuat pertanyaan.</p>
    </div>
</template>
  
<script>
import axios from 'axios';
  
export default {
    name: 'QuestionLevelOne',
    data() {
        return {
            currentLevel: 1, 
            currentQuestionNumber: 1,
            questionText: '', 
            options: [],
            selectedAnswer: null,
            loading: false, 
        };
    },
    watch: {
        '$route.params': {
            immediate: true, 
            handler(newParams) {
                this.currentQuestionNumber = parseInt(newParams.questionNumber);
                this.fetchQuestion();
            },
        },
    },
    methods: {
        async fetchQuestion() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    `http://localhost:8000/api/game/question/${this.currentLevel}/${this.currentQuestionNumber}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                // Correctly assign question text and options
                this.questionText = response.data.question;
                // The backend `options` object contains option_a, option_b, etc.
                // We need to map them to the format expected by the frontend's v-for loop
                this.options = [
                    { text: response.data.options.option_a, value: 'A' },
                    { text: response.data.options.option_b, value: 'B' },
                    { text: response.data.options.option_c, value: 'C' },
                    { text: response.data.options.option_d, value: 'D' },
                    { text: response.data.options.option_e, value: 'E' },
                ];
                this.selectedAnswer = null; // Reset selected answer when a new question is loaded
            } catch (error) {
                console.error('Error fetching question:', error);
                this.questionText = ''; // Clear question text on error
                this.options = [];    // Clear options on error
                alert('Gagal memuat pertanyaan. Silakan coba lagi.'); // User-friendly error message
            }
        },
        selectOption(optionValue) {
            this.selectedAnswer = optionValue;
        },
        prevQuestion() {
            if (this.currentQuestionNumber > 1) {
                this.$router.push(`/game/question-level-one/${this.currentQuestionNumber - 1}`);
            }
        },
        async nextQuestion() {
            if (!this.selectedAnswer) {
                alert('Silakan pilih jawaban terlebih dahulu.');
                return;
            }
    
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(
                    'http://localhost:8000/api/game/submit-answer',
                    {
                        level: this.currentLevel,
                        question_number: this.currentQuestionNumber,
                        answer: this.selectedAnswer,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
        
                if (response.data.next_level && response.data.next_question) {
                    // Lanjut ke level berikutnya jika sudah selesai 12 pertanyaan
                    if (response.data.next_level > this.currentLevel) {
                        this.$router.push(`/game/question-level-two/${response.data.next_question}`);
                    } else {
                        // Lanjut ke pertanyaan berikutnya di level yang sama
                        this.$router.push(`/game/question-level-one/${response.data.next_question}`);
                    }
                } else if (response.data.personality_type && response.data.recommended_majors) {
                    // Ini seharusnya tidak terjadi di Level 1 karena ada Level 2 dan 3
                    // Namun, ini untuk penanganan jika backend langsung mengembalikan hasil
                    this.loading = true;
                    setTimeout(() => {
                        this.$router.push('/result');
                    }, 3000);
                }
            } catch (error) {
                console.error('Error submitting answer:', error);
                alert('Terjadi kesalahan saat menyimpan jawaban.');
            }
        },
    },
};
</script>
  
<style scoped>
/* Tailwind CSS digunakan, jadi custom style minimal */
</style>
  
