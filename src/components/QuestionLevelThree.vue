<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div v-if="loading" class="text-center text-gray-700 text-2xl font-semibold">
            <img src="https://placehold.co/150x150/E0F7FA/000000?text=LOADING" alt="Loading" class="mx-auto mb-4 rounded-full shadow-md animate-pulse" />
            <p>Memuat pertanyaan...</p>
        </div>
  
        <div v-else-if="error" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center">
            <p class="text-red-500 text-xl mb-4">{{ error }}</p>
            <button @click="fetchQuestion" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Coba Lagi
            </button>
        </div>

        <div v-else-if="questionText && options.length > 0" class="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
            <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center font-cinzel" style="color: #63739A">
                LEVEL 3 - CERMINKAN DIRIMU
            </h2>
    
            <p class="text-lg text-gray-500 mb-8 text-center">{{ questionText }}</p>
    
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
                    Prev
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
    name: 'QuestionLevelThree',
    data() {
        return {
            currentLevel: 1, 
            currentQuestionNumber: 1,
            questionText: '', 
            options: [],
            selectedAnswer: null,
            loading: true,
            savedAnswers: {}, 
            error: null,
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
            this.loading = true;
            this.error = null;
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No authentication token found');
                }
                
                const response = await axios.get(
                    `http://localhost:8000/api/game/question/${this.currentLevel}/${this.currentQuestionNumber}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                
                if (!response.data || !response.data.question || !response.data.options) {
                    throw new Error('Invalid response format');
                }

                this.questionText = response.data.question;
                this.options = Object.entries(response.data.options).map(([key, value]) => ({
                    text: value, 
                    value: key  
                }));
                
                this.selectedAnswer = this.savedAnswers[`${this.currentLevel}_${this.currentQuestionNumber}`] || null;
            } catch (error) {
                console.error('Error fetching question:', error);
                this.error = error.response?.data?.message || 'Gagal memuat pertanyaan. Silakan coba lagi.';
                this.questionText = '';
                this.options = [];
            } finally {
                this.loading = false;
            }
        },
        selectOption(optionValue) {
            this.selectedAnswer = optionValue;
            this.savedAnswers[`${this.currentLevel}_${this.currentQuestionNumber}`] = optionValue;
        },
        prevQuestion() {
            if (this.currentQuestionNumber > 1) {
                this.$router.push(`/question-level-three/${this.currentQuestionNumber - 1}`);
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
        
                console.log('Submit answer response:', response.data); 
        
                if (response.data.next_level && response.data.next_question) {
                    if (response.data.next_level > this.currentLevel) {
                        this.$router.push('/result');
                    } else {
                        this.$router.push(`/question-level-three/${response.data.next_question}`);
                    }
                } else if (response.data.personality_type && response.data.recommended_majors) {
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
.font-cinzel {
    font-family: 'Cinzel Decorative', cursive;
}
</style>
  
