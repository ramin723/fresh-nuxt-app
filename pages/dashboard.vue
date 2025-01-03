<template>
    <div class="dashboard-container">
      <h1>داشبورد</h1>
      <p>خوش آمدید!</p>
      <button @click="logout">خروج</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const logout = () => {
    router.push('/login') // بازگشت به صفحه ورود
  }
  </script>
  
  <style>
  .dashboard-container {
    text-align: center;
    padding: 50px;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    background: #f44336;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background: #d32f2f;
  }
  </style>
  