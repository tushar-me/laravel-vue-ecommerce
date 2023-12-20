<script setup>
import AppLayout from '../components/AppLayout.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
    name: '',
    email: '',
    password: ''
});

const Register = async () => {
    try {
        await axios.post('http://127.0.0.1:8000/register', {
            name: form.value.name,
            email: form.value.email,
            password: form.value.password,
        });
        router.push('/');
    } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);

        if (error.response && error.response.data.errors) {
            console.error('Validation errors:', error.response.data.errors);
        }

        alert('Registration failed. Please check the console for details.');
    }
};
</script>

<template>
    <AppLayout>
        <div class="flex items justify-center my-20">
            <div class="bg-white p-6 rounded-lg w-full max-w-lg border border-gray-50 from">
                <h3 class="text-gray-900 text-3xl font-semibold mb-5 text-center">Create Account</h3>
                <form class="flex flex-col gap-4" @submit.prevent="Register">
                    <input type="text" placeholder="Name" v-model="form.name">
                    <input type="email" placeholder="Email" v-model="form.email">
                    <input type="text" placeholder="Password" v-model="form.password">
                    <div>
                        <p class="text-gray-600 font-normal text-sm flex items-center gap-2">
                            <input type="checkbox" class="bg-primary"> Accept all terms & Conditions
                        </p>
                    </div>
                    <button class="bg-primary py-3 rounded-full font-semibold text-base text-white">Create Account</button>
                </form>
                <p class="text-center mt-5 text-gray-600 font-normal">Already have an acount?
                    <router-link to="/login" class="text-gray-900 font-medium">Login</router-link>
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
    input[type="checkbox"] {
        accent-color: #00B207;
    }
}
</style>