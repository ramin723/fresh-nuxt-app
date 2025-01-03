<template>
    <div>
      <h1 class="text-center">رویدادهای در دسترس</h1>
      <swiper :slides-per-view="1" :space-between="10" class="event-slider">
        <swiper-slide v-for="event in events" :key="event.id">
          <div class="event-card">
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
            <div class="options">
              <div class="option" v-if="event.option_1_image">
                <img :src="event.option_1_image" alt="Option 1" />
                <span>گزینه ۱</span>
              </div>
              <div class="option" v-if="event.option_2_image">
                <img :src="event.option_2_image" alt="Option 2" />
                <span>گزینه ۲</span>
              </div>
            </div>
            <div class="event-details">
              <p>شروع: {{ new Date(event.start_time).toLocaleString() }}</p>
              <p>پایان: {{ new Date(event.end_time).toLocaleString() }}</p>
            </div>
            <button @click="placeBet(event.id, 'option_1')">شرط روی گزینه ۱</button>
            <button @click="placeBet(event.id, 'option_2')">شرط روی گزینه ۲</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/swiper-bundle.css";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        events: [], // لیست رویدادها
      };
    },
    methods: {
      async fetchEvents() {
        try {
          const response = await fetch("/api/events");
          const data = await response.json();
          this.events = data;
        } catch (error) {
          console.error("خطا در دریافت رویدادها:", error);
        }
      },
      async placeBet(eventId, option) {
        try {
          const response = await fetch("/api/bets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: 1, // این باید به کاربر فعلی متصل شود
              event_id: eventId,
              bet_option: option,
              bet_amount: 100, // مقدار شرط موقت
            }),
          });
          const data = await response.json();
          if (data.success) {
            alert("شرط شما با موفقیت ثبت شد!");
          } else {
            alert(data.message || "خطا در ثبت شرط");
          }
        } catch (error) {
          console.error("خطا در ثبت شرط:", error);
        }
      },
    },
    mounted() {
      this.fetchEvents();
    },
  };
  </script>
  
  <style>
  .event-slider {
    padding: 20px;
  }
  .event-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
  }
  .event-card img {
    max-width: 100%;
    height: auto;
    margin: 10px 0;
  }
  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  