<template>
    <div class="login-container">
      <h1>ورود به سیستم</h1>
      <form @submit.prevent="handleLogin">
        <input
          v-model="username"
          type="text"
          placeholder="نام کاربری"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="رمز عبور"
          required
        />
        <button type="submit">ورود</button>
        <p class="error" v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const username = ref('')
  const password = ref('')
  const error = ref(null)
  const router = useRouter()
  
  const handleLogin = async () => {
    try {
      const { data, error: fetchError } = await useFetch('/api/login', {
        method: 'POST',
        body: { username: username.value, password: password.value },
      })
  
      if (fetchError.value) {
        throw new Error(fetchError.value.message)
      }
  
      if (data.value.success) {
        router.push('/dashboard') // هدایت به صفحه داشبورد
      } else {
        error.value = data.value.message || 'خطا در ورود'
      }
    } catch (err) {
      error.value = 'خطا در ارتباط با سرور'
    }
  }
  </script>
  
  <style>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  button {
    width: 100%;
    padding: 10px;
    border: none;
    background: #4caf50;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background: #45a049;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  