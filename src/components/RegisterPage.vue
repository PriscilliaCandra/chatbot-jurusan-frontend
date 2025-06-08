<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-2 sm:p-4">
        <div class="bg-white p-3 sm:p-5 md:p-8 rounded-xl shadow-lg w-[95%] sm:w-[90%] md:w-full max-w-sm mx-auto">
            <div class="flex flex-col items-center mb-3 sm:mb-4 md:mb-6">
                <div class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-purple-200 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Register</h2>
            </div>

            <form @submit.prevent="register">
                <div class="mb-3 sm:mb-4">
                    <label for="name" class="block text-left text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        v-model="name"
                        class="shadow-sm appearance-none border rounded-lg w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div class="mb-3 sm:mb-4">
                    <label for="email" class="block text-left text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        class="shadow-sm appearance-none border rounded-lg w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base"
                        placeholder="you@email.com"
                        required
                    />
                </div>
                <div class="mb-3 sm:mb-4 md:mb-6">
                    <label for="password" class="block text-left text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        class="shadow-sm appearance-none border rounded-lg w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-gray-700 mb-2 sm:mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base"
                        placeholder="********"
                        required
                    />
                </div>
                <div class="flex flex-col gap-2 sm:gap-3 md:gap-4">
                    <button
                        type="submit"
                        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 sm:py-2.5 md:py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 transform hover:scale-105 text-sm sm:text-base w-full"
                    >
                        Register
                    </button>
                    <p class="text-center text-xs sm:text-sm mt-2 sm:mt-3 md:mt-4">
                        Sudah punya akun?
                        <router-link
                        to="/"
                        class="text-blue-600 hover:text-purple-800 font-semibold"
                        >
                        Login
                        </router-link>
                    </p>
                </div>
            </form>
            <p
                v-if="message"
                :class="messageType === 'error' ? 'text-red-500' : 'text-green-500'"
                class="mt-2 sm:mt-3 md:mt-4 text-center text-xs sm:text-sm"
            >
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            message: '',
            messageType: '',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:8000/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                this.message = 'Registrasi berhasil! Silakan login.';
                this.messageType = 'success';
                console.log('Register success:', response.data);
                // Arahkan ke login page
                setTimeout(() => {
                    this.$router.push('/');
                }, 1500);
            } catch (error) {
                this.message = 'Registrasi gagal. Email mungkin sudah terdaftar atau ada kesalahan lain.';
                this.messageType = 'error';
                console.error('Register error:', error);
            }
        },
    },
};
</script>

<style scoped>
/* Tambahan gaya bisa di sini */
</style>
