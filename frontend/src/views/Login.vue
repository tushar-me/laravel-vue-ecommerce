
<script setup>
import AppLayout from '../components/AppLayout.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

    const form = ref({
        email: '',
        password: ''
    });

    const Login = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/login', {
                email: form.value.email,
                password: form.value.password
            });
            router.push('/');
        } catch (error) {
            if (error.response) {
                
                console.error('Login error:', error.response.data);
                
                alert('Login failed. ' + error.response.data.message);
            } else if (error.request) {
                console.error('No response received:', error.request);
                alert('Login failed. Please try again later.');
            } else {
                console.error('Request setup error:', error.message);
                alert('An unexpected error occurred. Please try again later.');
            }
        }
    };

</script>


<template>
    <AppLayout>
        <div class="flex items justify-center my-20">
            <div class="bg-white p-6 rounded-lg w-full max-w-lg border border-gray-50 from">
                <h3 class="text-gray-900 text-3xl font-semibold mb-5 text-center">Sign In</h3>
                <form class="flex flex-col gap-4" @submit.prevent="Login">
                    <input type="email" v-model="form.email" placeholder="Email">
                    <input type="text" v-model="form.password" placeholder="Password">
                    <div class="text-end">
                        <router-link to="" class="text-gray-600 font-normal text-sm">Forget Password?</router-link>
                    </div>
                    <button class="bg-primary py-3 rounded-full font-semibold text-base text-white">Login</button>
                </form>
                <p class="text-center mt-5 text-gray-600 font-normal">Don't have acount?
                    <router-link to="/register" class="text-gray-900 font-medium">Register</router-link>
                </p>
            </div>
        </div>
    </AppLayout>
</template>


<style lang="scss" scoped>
    .from {
        box-shadow: 0px 0px 56px 0px rgba(0, 38, 3, 0.08);
        input {
            @apply p-3 border rounded-md text-gray-600;
        }
    }
</style>