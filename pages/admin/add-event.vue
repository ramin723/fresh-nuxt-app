<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">ثبت رویداد جدید</h1>
      <form @submit.prevent="addEvent" enctype="multipart/form-data">
        <!-- عنوان رویداد -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">عنوان رویداد</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full px-3 py-2 border rounded-md"
            placeholder="عنوان رویداد را وارد کنید"
            required
          />
        </div>
        
        <!-- توضیحات رویداد -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">توضیحات رویداد</label>
          <textarea
            v-model="form.description"
            class="w-full px-3 py-2 border rounded-md"
            rows="3"
            placeholder="توضیحات رویداد را وارد کنید"
          ></textarea>
        </div>
        
        <!-- تصویر گزینه اول -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">تصویر گزینه اول</label>
          <input
            type="file"
            @change="onFileChange('option1')"
            class="w-full px-3 py-2 border rounded-md"
            accept="image/*"
            required
          />
        </div>
        
        <!-- تصویر گزینه دوم -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">تصویر گزینه دوم</label>
          <input
            type="file"
            @change="onFileChange('option2')"
            class="w-full px-3 py-2 border rounded-md"
            accept="image/*"
            required
          />
        </div>
        
        <!-- تاریخ شروع -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">تاریخ شروع</label>
          <input
            v-model="form.startTime"
            type="datetime-local"
            class="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <!-- تاریخ پایان -->
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">تاریخ پایان</label>
          <input
            v-model="form.endTime"
            type="datetime-local"
            class="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
  
        <!-- دکمه ثبت -->
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          ثبت رویداد
        </button>
        
        <!-- پیام موفقیت یا خطا -->
        <p v-if="message" class="text-green-500 mt-4">{{ message }}</p>
        <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { useFetch } from '#app';
  
  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          option1: null,
          option2: null,
          startTime: '',
          endTime: '',
        },
        message: '',
        error: '',
      };
    },
    methods: {
      onFileChange(option) {
        const fileInput = event.target.files[0];
        if (option === 'option1') {
          this.form.option1 = fileInput;
        } else if (option === 'option2') {
          this.form.option2 = fileInput;
        }
      },
      async addEvent() {
        try {
          const formData = new FormData();
          formData.append('title', this.form.title);
          formData.append('description', this.form.description);
          formData.append('option1', this.form.option1);
          formData.append('option2', this.form.option2);
          formData.append('start_time', this.form.startTime);
          formData.append('end_time', this.form.endTime);
  
          const { data, error } = await useFetch('/api/events', {
            method: 'POST',
            body: formData,
          });
  
          if (error.value) {
            this.error = 'خطا در ثبت رویداد. لطفاً دوباره تلاش کنید.';
            this.message = '';
          } else {
            this.message = 'رویداد با موفقیت ثبت شد!';
            this.error = '';
          }
        } catch (err) {
          console.error(err);
          this.error = 'خطای ناشناخته. لطفاً دوباره تلاش کنید.';
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 700px;
  }
  </style>
  