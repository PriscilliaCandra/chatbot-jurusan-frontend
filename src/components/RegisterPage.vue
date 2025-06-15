<template>
    <div class="min-h-screen w-full bg-gray-100">
        <div class="min-h-screen bg-white flex flex-col">
            <div class="flex-1 flex flex-col items-center justify-center p-4">
                <div class="w-full max-w-md">
                    <div class="flex flex-col items-center mb-6">
                        <div class="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center mb-4">
                            <svg class="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Register</h2>
                    </div>

                    <form @submit.prevent="register" class="space-y-4">
                        <div>
                            <label for="name" class="block text-left text-gray-700 text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                v-model="name"
                                class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-base"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label for="email" class="block text-left text-gray-700 text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                v-model="email"
                                class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-base"
                                placeholder="you@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label for="password" class="block text-left text-gray-700 text-sm font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                v-model="password"
                                class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-base"
                                placeholder="********"
                                required
                            />
                        </div>
                        <div class="space-y-4">
                            <button
                                type="submit"
                                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 transform hover:scale-105 text-base w-full"
                            >
                                Register
                            </button>
                            <p class="text-center text-sm mt-4">
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
                        class="mt-4 text-center text-sm"
                    >
                        {{ message }}
                    </p>
                </div>
            </div>
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
